import { Injectable, type OnModuleDestroy, type OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@/prisma/generated';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	async onModuleInit(): Promise<void> {
		await this.$connect();
	}

	async onModuleDestroy(): Promise<void> {
		await this.$disconnect();
	}
}
