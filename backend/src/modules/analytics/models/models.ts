import { Field, Int, ObjectType } from '@nestjs/graphql';

import { UserRole } from '@/prisma/generated';

@ObjectType()
export class UserRoleCount {
	@Field(() => String)
	role: UserRole;

	@Field(() => Int)
	count: number;
}

@ObjectType()
export class UserStars {
	@Field()
	id: string;

	@Field()
	email: string;

	@Field(() => Int)
	stars: number;
}

@ObjectType()
export class QuestCompletionStat {
	@Field()
	date: string;

	@Field(() => Int)
	count: number;
}

@ObjectType()
export class BoostUsage {
	@Field()
	name: string;

	@Field(() => Int)
	activationCount: number;
}

@ObjectType()
export class RoomUserCount {
	@Field()
	roomName: string;

	@Field(() => Int)
	userCount: number;
}
