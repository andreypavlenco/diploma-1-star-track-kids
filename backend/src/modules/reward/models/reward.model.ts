import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { RewardPurchase, User } from '@/prisma/generated';

import { UserModel } from '../../auth/account/models/user.model';

import { RewardPurchaseModel } from './reward-purchase.model';

@ObjectType()
export class RewardModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	title: string;

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

	@Field(() => [RewardPurchaseModel])
	purchases: RewardPurchase[];
}
