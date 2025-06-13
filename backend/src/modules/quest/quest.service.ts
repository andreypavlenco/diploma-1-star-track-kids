import { Injectable } from '@nestjs/common';
import { addHours } from 'date-fns';

import { PrismaService } from '@/src/core/prisma/prisma.service';

import { BoostService } from '../boost/boost.service';

import { CreateQuestInput } from './input/create-quest.input';

@Injectable()
export class QuestService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly boostService: BoostService
	) {}

	async getChildrenActivity(parentId: string) {
		const completions = await this.prisma.questCompletion.findMany({
			where: {
				user: {
					parents: { some: { id: parentId } },
				},
			},
			include: {
				quest: true,
				user: true,
			},
		});

		const purchases = await this.prisma.rewardPurchase.findMany({
			where: {
				child: {
					parents: { some: { id: parentId } },
				},
			},
			include: {
				reward: true,
				child: true,
			},
		});

		return { completions, purchases };
	}

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

	async questCompletion(userId: string, questId: string): Promise<boolean> {
		const quest = await this.prisma.quest.findUnique({
			where: { id: questId },
			select: { difficulty: true, deadline: true, goal: { select: { id: true } } },
		});

		if (!quest) throw new Error('Quest not found');

		let stars = quest.difficulty;
		if (quest.goal?.id) {
			await this.prisma.goal.update({
				where: { id: quest.goal.id },
				data: {
					starReward: { decrement: stars },
				},
			});
		}

		const completedAt = new Date();
		const boosts = await this.boostService.getActiveBoosts(userId);

		const hasQuickFinish = boosts.some(
			b => b.boost.name === 'Quick Finish' && completedAt <= addHours(b.activatedAt, 10)
		);
		const hasNoLatePenalty = boosts.some(b => b.boost.name === 'No Late Penalty');
		if (hasQuickFinish) {
			stars *= 2;
		}
		const isLate = completedAt > quest.deadline;
		if (isLate && !hasNoLatePenalty) {
			stars = Math.floor(stars / 2);
		}
		const completion = await this.prisma.questCompletion.create({
			data: {
				quest: { connect: { id: questId } },
				user: { connect: { id: userId } },
				starsAwarded: stars,
				isLate,
				completedAt,
			},
		});
		await this.prisma.user.update({
			where: { id: userId },
			data: {
				stars: { increment: stars },
				quests: { connect: { id: questId } },
			},
		});

		return true;
	}
}
