import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { UserModel } from '../../auth/account/models/user.model';

import { QuestModel } from './quest.model';

@ObjectType('QuestCompletion')
export class QuestCompletionModel {
	@Field(() => ID)
	id: string;

	@Field(() => Date)
	completedAt: Date;

	@Field()
	isLate: boolean;

	@Field(() => Int)
	starsAwarded: number;

	@Field(() => QuestModel)
	quest: QuestModel;

	@Field(() => ID)
	questId: string;

	@Field(() => UserModel)
	user: UserModel;

	@Field(() => ID)
	userId: string;
}
