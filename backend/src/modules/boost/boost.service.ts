import { BadRequestException, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { addDays, addHours } from 'date-fns';

import { Boost, BoostActivation } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

@Injectable()
export class BoostService {
	constructor(private readonly prisma: PrismaService) {}

	async listAll(): Promise<Boost[]> {
		return await this.prisma.boost.findMany({});
	}

	async findById(id: string): Promise<Boost | null> {
		return await this.prisma.boost.findUnique({
			where: { id },
		});
	}

	async getUserActivations(userId: string): Promise<BoostActivation[]> {
		return await this.prisma.boostActivation.findMany({
			where: { userId },
			include: { boost: true },
		});
	}

	async canActivate(boostId: string, userId: string): Promise<boolean> {
		const last = await this.prisma.boostActivation.findFirst({
			where: { boostId, userId },
			orderBy: { activatedAt: 'desc' },
			include: { boost: true },
		});
		if (!last) return true;
		const nextAvailable = addDays(last.activatedAt, last.boost.cooldownDays);
		return new Date() >= nextAvailable;
	}

	async activate(boostId: string, userId: string): Promise<BoostActivation> {
		if (!(await this.canActivate(boostId, userId))) {
			throw new BadRequestException('Boost on cooldown');
		}
		const boost = await this.prisma.boost.findUnique({ where: { id: boostId } });
		const expiresAt = addHours(new Date(), boost.durationHours);
		return this.prisma.boostActivation.create({
			data: { boostId, userId, expiresAt },
			include: { boost: true },
		});
	}

	async getActiveBoosts(userId: string): Promise<(BoostActivation & { boost: Boost })[]> {
		return this.prisma.boostActivation.findMany({
			where: { userId, expiresAt: { gt: new Date() } },
			include: { boost: true },
		});
	}

	@Cron('0 * * * *')
	async expireBoosts(): Promise<void> {
		await this.prisma.boostActivation.updateMany({
			where: { expiresAt: { lt: new Date() } },
			data: { expiresAt: new Date() },
		});
	}
}
