import { Injectable } from '@nestjs/common';

import { Room } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import { CreateRoomInput } from './input/create-room.input';

@Injectable()
export class RoomService {
	constructor(private readonly prisma: PrismaService) {}

	async create(input: CreateRoomInput, userId: string) {
		const { name } = input;

		const room = await this.prisma.room.create({
			data: {
				name,
				createUserId: userId,
				members: {
					create: {
						userId: userId,
					},
				},
			},
		});
		return room;
	}

	async findById(roomId: string): Promise<Room | null> {
		const room = await this.prisma.room.findUnique({
			where: {
				id: roomId,
			},
			include: {
				members: true,
				quests: {
					select: {
						id: true,
						title: true,
						description: true,
						deadline: true,
						difficulty: true,
					},
				},
			},
		});
		return room;
	}

	async findAll(userId: string) {
		const rooms = await this.prisma.room.findMany({
			where: {
				members: {
					some: {
						userId: userId,
					},
				},
			},
		});
		return rooms;
	}
	async findAllQuestByRoomMemberId(userId: string) {
		const rooms = await this.prisma.room.findMany({
			where: {
				members: {
					some: {
						userId: userId,
					},
				},
			},
			include: {
				quests: {
					include: {
						completions: {
							select: {
								userId: true,
							},
						},
					},
				},
				createUser: true,
				members: true,
			},
		});
		return rooms;
	}

	async delete(roomId: string): Promise<boolean | null> {
		await this.prisma.room.delete({
			where: { id: roomId },
		});
		return true;
	}

	async update(roomId: string, input: CreateRoomInput): Promise<Room | null> {
		const { name } = input;

		return await this.prisma.room.update({
			where: { id: roomId },
			data: { name },
		});
	}
}
