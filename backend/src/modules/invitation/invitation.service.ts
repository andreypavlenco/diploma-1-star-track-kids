import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { addDays } from 'date-fns';
import { nanoid } from 'nanoid';

import { Invitation } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import { MailService } from '../libs/mail/mail.service';

import { CreateInvitationInput } from './input/create-invitation.input';

@Injectable()
export class InvitationService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly mailService: MailService
	) {}

	async create(input: CreateInvitationInput, roomId: string, userId: string): Promise<boolean> {
		const room = await this.prisma.room.findUnique({ where: { id: roomId } });
		if (!room) throw new NotFoundException(`Room ${roomId} not found`);
		const token = nanoid(32);
		const expiresAt = addDays(new Date(), 7);
		await this.mailService.sendInvitationEmail(input.email, token);
		const invitation = await this.prisma.invitation.create({
			data: {
				email: input.email,
				role: input.role,
				expiresAt: expiresAt,
				room: {
					connect: { id: roomId },
				},

				invitedBy: {
					connect: { id: userId },
				},
				token,
			},
			include: {
				room: true,
				invitedBy: true,
			},
		});

		return !!invitation;
	}

	async acceptInvitation(token: string, userId: string): Promise<boolean> {
		const invitation = await this.prisma.invitation.findUnique({
			where: { token },
			select: {
				id: true,
				roomId: true,
				invitedById: true,
				role: true,
				expiresAt: true,
			},
		});
		if (!invitation) {
			throw new NotFoundException(`Invitation with token "${token}" not found`);
		}
		if (invitation.expiresAt < new Date()) {
			throw new BadRequestException('Invitation has expired');
		}

		await this.prisma.$transaction(async tx => {
			// 1. Створення roomMember для конкретної кімнати з інвайта
			await tx.roomMember.create({
				data: {
					user: { connect: { id: userId } },
					room: { connect: { id: invitation.roomId } },
					role: invitation.role,
				},
			});

			// 2. Якщо це дитина — пов’язуємо з батьком
			if (invitation.invitedById && invitation.role === 'CHILD') {
				// 2.1 Прив'язуємо дитину до батька
				await tx.user.update({
					where: { id: invitation.invitedById },
					data: { children: { connect: { id: userId } } },
				});

				// 2.2 Отримуємо ВСІ кімнати батька
				const parentRoomMemberships = await tx.roomMember.findMany({
					where: { userId: invitation.invitedById },
					select: { roomId: true },
				});

				// 2.3 Додаємо дитину до кожної кімнати, якщо ще не додана
				for (const { roomId } of parentRoomMemberships) {
					const exists = await tx.roomMember.findFirst({
						where: {
							userId,
							roomId,
						},
					});

					if (!exists) {
						await tx.roomMember.create({
							data: {
								userId,
								roomId,
								role: 'CHILD',
							},
						});
					}
				}
			}

			// 3. Видаляємо запрошення
			await tx.invitation.delete({
				where: { id: invitation.id },
			});
		});

		return true;
	}
	async findByToken(token: string): Promise<Invitation | null> {
		return this.prisma.invitation.findUnique({
			where: { token },
		});
	}
}
