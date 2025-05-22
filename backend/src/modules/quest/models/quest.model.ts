import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { UserModel } from '../../auth/account/models/user.model';
import { GoalModel } from '../../goal/models/goal.model';
import { RoomModel } from '../../room/models/room.model';

import { QuestCompletionModel } from './quest-completion.model';

@ObjectType('Quest')
export class QuestModel {
	@Field(() => ID)
	id: string;

	@Field()
	title: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => Date)
	deadline: Date;

	@Field(() => Int)
	difficulty: number;

	@Field(() => UserModel)
	creator: UserModel;

	@Field(() => ID)
	creatorId: string;

	@Field(() => GoalModel, { nullable: true })
	goal?: GoalModel;

	@Field(() => ID, { nullable: true })
	goalId?: string;

	@Field(() => [QuestCompletionModel], { nullable: true })
	completions?: QuestCompletionModel[];

	@Field(() => RoomModel, { nullable: true })
	room?: RoomModel;

	@Field(() => ID, { nullable: true })
	roomId?: string;
}
