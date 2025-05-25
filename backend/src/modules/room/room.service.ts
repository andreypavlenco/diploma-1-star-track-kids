import { ForbiddenException, Injectable } from '@nestjs/common';

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

	async findById(roomId: string, userId: string): Promise<Room | null> {
		const room = await this.prisma.room.findUnique({
			where: {
				id: roomId,
				members: {
					some: {
						userId: userId,
					},
				},
			},
			include: {
				quests: {
					select: {
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

	async delete(roomId: string, createUserId: string): Promise<boolean | null> {
		const room = await this.prisma.room.findUnique({
			where: { id: roomId },
			select: { createUserId: true },
		});
		if (!room || room.createUserId !== createUserId) {
			throw new ForbiddenException('You have no rights to delete this room');
		}
		await this.prisma.room.delete({
			where: { id: roomId },
		});
		return true;
	}

	async update(
		roomId: string,
		input: CreateRoomInput,
		createUserId: string
	): Promise<Room | null> {
		const { name } = input;

		const room = await this.prisma.room.findUnique({
			where: { id: roomId },
			select: { createUserId: true },
		});
		if (!room || room.createUserId !== createUserId) {
			throw new ForbiddenException('You have no rights to update this room');
		}

		return await this.prisma.room.update({
			where: { id: roomId },
			data: { name },
		});
	}
}
