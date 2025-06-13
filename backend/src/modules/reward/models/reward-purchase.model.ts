import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { Reward, User } from '@/prisma/generated';

import { UserModel } from '../../auth/account/models/user.model';

import { RewardModel } from './reward.model';

@ObjectType()
export class RewardPurchaseModel {
	@Field(() => ID)
	id: string;

	@Field(() => Date)
	purchasedAt: Date;

	@Field(() => String, { nullable: true })
	description: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Int)
	starCost: number;

	@Field(() => UserModel)
	creator: User;

	@Field(() => String)
	creatorId: string;

	@Field(() => [RewardModel])
	reward: Reward;

	@Field(() => String)
	rewarId: string;

	@Field(() => UserModel, { nullable: true })
	child?: User;

	@Field(() => String)
	childId: string;
}
