import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/src/core/prisma/prisma.service';

import { CreateQuestInput } from './input/create-quest.input';

@Injectable()
export class QuestService {
	constructor(private readonly prisma: PrismaService) {}

	async create(roomId: string, input: CreateQuestInput, userId: string, goalId?: string) {
		return this.prisma.quest.create({
			data: {
				...input,
				roomId,
				creatorId: userId,
				goalId,
			},
		});
	}

	async findAll(roomId: string) {
		const quests = await this.prisma.quest.findMany({
			where: {
				roomId,
			},
			orderBy: {
				deadline: 'desc',
			},
		});
		return quests;
	}

	async findById(id: string, roomId?: string) {
		return this.prisma.quest.findFirst({
			where: {
				id,
				...(roomId && { roomId }),
			},
		});
	}

	async update(id: string, input: CreateQuestInput) {
		const { title, description, deadline, difficulty } = input;
		const quest = await this.prisma.quest.update({
			where: {
				id,
			},
			data: {
				title,
				description,
				deadline,
				difficulty,
			},
		});
		return quest;
	}

	async delete(id: string) {
		const quest = await this.prisma.quest.delete({
			where: {
				id,
			},
		});
		return quest;
	}

	async findByGoalId(goalId: string) {
		const quest = await this.prisma.quest.findFirst({
			where: {
				goalId,
			},
		});
		return quest;
	}
}
