import { Field, ID, ObjectType } from '@nestjs/graphql';

import { UserModel } from '../../auth/account/models/user.model';
import { QuestModel } from '../../quest/models/quest.model';

import { InvitationModel } from './invitation.model';
import { RoomMemberModel } from './rooms-member.model';

@ObjectType('Room')
export class RoomModel {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => UserModel)
	createUser: UserModel;

	@Field(() => ID)
	createUserId: string;

	@Field(() => [RoomMemberModel])
	members: RoomMemberModel[];

	@Field(() => [InvitationModel])
	invitations: InvitationModel[];

	@Field(() => [QuestModel], { nullable: true })
	quests?: QuestModel[];
}
