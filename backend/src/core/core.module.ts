import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AccountModule } from '../modules/auth/account/account.module';
import { SessionModule } from '../modules/auth/session/session.module';
import { BoostModule } from '../modules/boost/boost.module';
import { GoalModule } from '../modules/goal/goal.module';
import { QuestModule } from '../modules/quest/quest.module';
import { RewardModule } from '../modules/reward/reward.module';
import { IS_DEV_ENV } from '../shared/utils/is.dev-util';

import { getGraphqlConfig } from './config/graphql.config';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: !IS_DEV_ENV,
		}),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphqlConfig,
			inject: [ConfigService],
		}),
		PrismaModule,
		RedisModule,
		AccountModule,
		SessionModule,
		QuestModule,
		GoalModule,
		RewardModule,
		BoostModule,
	],
})
export class CoreModule {}
