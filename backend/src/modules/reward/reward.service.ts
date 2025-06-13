import { Injectable } from '@nestjs/common';

import { Reward } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import { CreateRewardInput } from './input/create-reward.input';
import { UpdateRewardInput } from './input/update-reward.input';
import { RewardPurchaseResponse } from './models/RewardPurchaseResponse';

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

	// async findRewardsForChild(childId: string): Promise<Reward[]> {
	// 	return this.prisma.reward.findMany({
	// 		where: {
	// 			creator: {
	// 				parents: {
	// 					some: { id: childId },
	// 				},
	// 			},
	// 		},
	// 		include: { creator: true },
	// 	});
	// }

	async findRewardsForUser(userId: string): Promise<Reward[]> {
		return this.prisma.reward.findMany({
			where: {
				OR: [
					{ creatorId: userId },
					{
						creator: {
							children: {
								some: {
									id: userId,
								},
							},
						},
					},
				],
			},
			include: {
				creator: true,
				purchases: {
					include: {
						child: true,
					},
				},
			},
		});
	}

	async createRewardPurchase(userId: string, rewardId: string): Promise<RewardPurchaseResponse> {
		const [reward, user] = await this.prisma.$transaction([
			this.prisma.reward.findUnique({ where: { id: rewardId } }),
			this.prisma.user.findUnique({ where: { id: userId }, select: { stars: true } }),
		]);

		if (!reward) {
			return { success: false, message: 'Reward not found' };
		}
		if (!user) {
			return { success: false, message: 'User not found' };
		}
		// if (reward.creatorId === userId) {
		// 	return { success: false, message: 'Cannot purchase your own reward' };
		// }

		const stars = user.stars ?? 0;
		if (stars < reward.starCost) {
			return { success: false, message: 'Insufficient stars' };
		}

		await this.prisma.$transaction([
			this.prisma.rewardPurchase.create({
				data: {
					child: { connect: { id: userId } },
					reward: { connect: { id: rewardId } },
				},
			}),
			this.prisma.user.update({
				where: { id: userId },
				data: { stars: { decrement: reward.starCost } },
			}),
		]);

		return { success: true, message: 'Ok' };
	}
}
