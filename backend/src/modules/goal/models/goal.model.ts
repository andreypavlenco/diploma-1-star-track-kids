import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { UserModel } from '../../auth/account/models/user.model';
import { QuestModel } from '../../quest/models/quest.model';

@ObjectType('Goal')
export class GoalModel {
	@Field(() => ID)
	id: string;

	@Field()
	title: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => Int)
	starReward: number;

	@Field(() => UserModel)
	creator: UserModel;

	@Field(() => ID)
	creatorId: string;

	@Field(() => Date, { nullable: true })
	completedAt?: Date;

	@Field(() => [QuestModel], { nullable: true })
	quests?: QuestModel[];
}
