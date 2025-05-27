import { Injectable } from '@nestjs/common';
import { addDays } from 'date-fns';

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

	//      async activate(boostId: string, userId: string): Promise<BoostActivation> {
	//     if (!(await this.canActivate(boostId, userId))) {
	//       throw new BadRequestException('Boost on cooldown');
	//     }
	//     const boost = await this.prisma.boost.findUnique({ where: { id: boostId } });
	//     const expiresAt = addHours(new Date(), boost.durationHours);
	//     return this.prisma.boostActivation.create({
	//       data: { boostId, userId, expiresAt },
	//       include: { boost: true },
	//     });
	//   }

	//   /** 5. Вернуть все **активные** бусты у пользователя (expiresAt > now) */
	//   async getActiveBoosts(userId: string): Promise<BoostActivation[]> {
	//     return this.prisma.boostActivation.findMany({
	//       where: { userId, expiresAt: { gt: new Date() } },
	//       include: { boost: true },
	//     });
	//   }

	//   /** 6. Построить расписание, которое по Cron снимает все просроченные активации */
	//   @Cron('0 * * * *') // каждый час
	//   async expireBoosts(): Promise<void> {
	//     await this.prisma.boostActivation.updateMany({
	//       where: { expiresAt: { lt: new Date() } },
	//       data: { /* можно пометить флагом, или просто оставить в истории */ },
	//     });
	//   }

	//   /**
	//    * 7. Рассчитать итоговые звёзды за квест с учётом активных бустов:
	//    *    - базовые = difficulty
	//    *    - ×2, если применён «быстрый» буст и дедлайн не превышен
	//    *    - отмена штрафа за просрочку, если активен соответствующий буст
	//    */
	//   async computeStars(
	//     userId: string,
	//     difficulty: number,
	//     completedAt: Date,
	//     deadline: Date
	//   ): Promise<number> {
	//     let stars = difficulty;
	//     const boosts = await this.getActiveBoosts(userId);

	//     // пример проверки «двойных звёзд»
	//     if (
	//       boosts.some(b => b.boost.name === 'Quick Finish' &&
	//                       completedAt <= addHours(b.activatedAt, 10))
	//     ) {
	//       stars *= 2;
	//     }

	//     // пример отмены штрафа за просрочку
	//     if (completedAt > deadline) {
	//       if (!boosts.some(b => b.boost.name === 'No Late Penalty')) {
	//         stars = Math.floor(stars / 2);
	//       }
	//     }

	//     return stars;
	//   }
}
