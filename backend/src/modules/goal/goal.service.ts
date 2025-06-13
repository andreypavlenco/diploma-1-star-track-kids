import { Injectable } from '@nestjs/common';

import { Goal } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import { CreateGoalInput } from './input/create-goal.input';
import { UpdateGoalInput } from './input/update-goal.input';

@Injectable()
export class GoalService {
	constructor(private readonly prisma: PrismaService) {}

	async create(userId: string, input: CreateGoalInput): Promise<Goal> {
		return await this.prisma.goal.create({
			data: {
				...input,
				creatorId: userId,
			},
			include: {
				creator: true,
			},
		});
	}

	async findById(id: string): Promise<Goal | null> {
		return await this.prisma.goal.findUnique({
			where: { id },
			include: {
				creator: true,
				quests: true,
			},
		});
	}
	async update(id: string, input: UpdateGoalInput): Promise<Goal> {
		return await this.prisma.goal.update({
			where: { id },
			data: input,
			include: {
				creator: true,
				quests: true,
			},
		});
	}
	async delete(id: string): Promise<boolean> {
		await this.prisma.goal.delete({
			where: { id },
			include: {
				creator: true,
				quests: true,
			},
		});
		return true;
	}
	async findByCreatorId(creatorId: string): Promise<Goal[]> {
		return await this.prisma.goal.findMany({
			where: { creatorId },
			include: {
				creator: true,
				quests: true,
			},
		});
	}
	async findCompletedGoals(userId: string): Promise<Goal[]> {
		return await this.prisma.goal.findMany({
			where: { creatorId: userId, completedAt: { not: null } },
			include: {
				creator: true,
				quests: true,
			},
		});
	}

	async findActiveGoals(userId: string): Promise<Goal[]> {
		return await this.prisma.goal.findMany({
			where: { creatorId: userId, completedAt: null },
			include: {
				creator: true,
				quests: true,
			},
		});
	}
	async completeGoal(id: string): Promise<Goal> {
		return await this.prisma.goal.update({
			where: { id },
			data: { completedAt: new Date() },
			include: {
				creator: true,
				quests: true,
			},
		});
	}
	async uncompleteGoal(id: string): Promise<Goal> {
		return await this.prisma.goal.update({
			where: { id },
			data: { completedAt: null },
			include: {
				creator: true,
				quests: true,
			},
		});
	}
	async findGoal(userId: string): Promise<Goal[]> {
		return this.prisma.goal.findMany({
			where: {
				OR: [
					{ creatorId: userId },
					{
						creator: {
							children: {
								some: { id: userId },
							},
						},
					},
				],
			},
			include: { creator: true },
		});
	}
}
