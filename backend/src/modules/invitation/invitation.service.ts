import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { addDays } from 'date-fns';
import { nanoid } from 'nanoid';

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
			await tx.roomMember.create({
				data: {
					user: { connect: { id: userId } },
					room: { connect: { id: invitation.roomId } },
					role: invitation.role,
				},
			});

			if (invitation.invitedById && invitation.role === 'CHILD') {
				await tx.user.update({
					where: { id: invitation.invitedById },
					data: { children: { connect: { id: userId } } },
				});
			}

			await tx.invitation.delete({
				where: { id: invitation.id },
			});
		});

		return true;
	}
}
