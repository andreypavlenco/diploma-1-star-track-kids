import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import {
	BoostActivation,
	Goal,
	Quest,
	QuestCompletion,
	Reward,
	RewardPurchase,
} from '@/prisma/generated';
import { UserRole } from '@/src/shared/type/user-role';

@ObjectType()
export class UserModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	email: string;

	@Field(() => Date)
	updateAt: Date;

	@Field(() => String)
	password: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => UserRole)
	role: UserRole;

	@Field(() => Int)
	stars: number;

	@Field(() => [QuestCompletion])
	completions: QuestCompletion[];

	@Field(() => [RewardPurchase])
	rewards: RewardPurchase[];

	@Field(() => [Reward])
	rewardsPurchase: Reward[];

	@Field(() => [BoostActivation])
	boosts: BoostActivation[];

	@Field(() => [Goal])
	goals: Goal[];

	@Field(() => [Quest])
	quests: Quest[];
}
