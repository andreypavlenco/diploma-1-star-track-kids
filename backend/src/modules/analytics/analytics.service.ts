import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/src/core/prisma/prisma.service';

@Injectable()
export class AnalycticsService {
	constructor(private readonly prisma: PrismaService) {}

	async getUserCountByRole(parentId: string) {
		const children = await this.prisma.user.findMany({
			where: {
				parents: {
					some: { id: parentId },
				},
			},
		});

		const counts = children.reduce(
			(acc, child) => {
				acc[child.role] = (acc[child.role] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>
		);

		return Object.entries(counts).map(([role, count]) => ({
			role,
			count,
		}));
	}

	async getTopUsersByStars(parentId: string, limit = 5) {
		return this.prisma.user.findMany({
			where: {
				parents: {
					some: { id: parentId },
				},
			},
			orderBy: { stars: 'desc' },
			take: limit,
			select: {
				id: true,
				email: true,
				stars: true,
			},
		});
	}

	async getQuestCompletionsByDay(parentId: string, days = 7) {
		const startDate = new Date();
		startDate.setDate(startDate.getDate() - days);

		const completions = await this.prisma.questCompletion.findMany({
			where: {
				user: {
					parents: {
						some: { id: parentId },
					},
				},
				completedAt: { gte: startDate },
			},
		});

		const grouped = completions.reduce(
			(acc, completion) => {
				const date = completion.completedAt.toISOString().split('T')[0];
				acc[date] = (acc[date] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>
		);

		return Object.entries(grouped).map(([date, count]) => ({ date, count }));
	}

	async getTotalRewardsPurchased(parentId: string) {
		return this.prisma.rewardPurchase.count({
			where: {
				child: {
					parents: {
						some: { id: parentId },
					},
				},
			},
		});
	}

	async getTopBoosts(parentId: string, limit = 3) {
		const activations = await this.prisma.boostActivation.findMany({
			where: {
				user: {
					parents: {
						some: { id: parentId },
					},
				},
			},
		});

		const grouped = activations.reduce(
			(acc, item) => {
				acc[item.boostId] = (acc[item.boostId] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>
		);

		const sorted = Object.entries(grouped)
			.sort(([, a], [, b]) => b - a)
			.slice(0, limit);

		const boostIds = sorted.map(([id]) => id);
		const boosts = await this.prisma.boost.findMany({
			where: { id: { in: boostIds } },
		});

		return sorted.map(([id, count]) => ({
			name: boosts.find(b => b.id === id)?.name || 'Невідомо',
			activationCount: count,
		}));
	}

	async getRoomUserCounts(parentId: string) {
		const rooms = await this.prisma.room.findMany({
			where: {
				createUserId: parentId,
			},
			include: {
				members: true,
			},
		});

		return rooms.map(room => ({
			roomName: room.name,
			userCount: room.members.length,
		}));
	}
}
