import { Injectable } from '@nestjs/common';

import { Reward } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import { CreateRewardInput } from './input/create-reward.input';
import { UpdateRewardInput } from './input/update-reward.input';

@Injectable()
export class RewardService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<Reward[]> {
		return await this.prisma.reward.findMany({
			include: {
				creator: true,
			},
		});
	}

	async findById(id: string): Promise<Reward | null> {
		return await this.prisma.reward.findUnique({
			where: { id },
			include: {
				creator: true,
			},
		});
	}

	async create(userId: string, input: CreateRewardInput): Promise<Reward> {
		return await this.prisma.reward.create({
			data: {
				...input,
				creatorId: userId,
			},
			include: {
				creator: true,
			},
		});
	}
	async update(id: string, input: UpdateRewardInput): Promise<Reward> {
		return await this.prisma.reward.update({
			where: { id },
			data: input,
			include: {
				creator: true,
			},
		});
	}
	async delete(id: string): Promise<boolean> {
		await this.prisma.reward.delete({
			where: { id },
			include: {
				creator: true,
			},
		});
		return true;
	}
	async findByCreatorId(creatorId: string): Promise<any[]> {
		return await this.prisma.reward.findMany({
			where: { creatorId },
			include: {
				creator: true,
			},
		});
	}

	async findRewardsForChild(childId: string): Promise<Reward[]> {
		return this.prisma.reward.findMany({
			where: {
				creator: {
					parents: {
						some: { id: childId },
					},
				},
			},
			include: { creator: true },
		});
	}
}
