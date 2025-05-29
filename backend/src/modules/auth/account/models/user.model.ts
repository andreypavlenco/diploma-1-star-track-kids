import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { BoostActivationModel } from '@/src/modules/boost/models/boost-activation.model';
import { GoalModel } from '@/src/modules/goal/models/goal.model';
import { InvitationModel } from '@/src/modules/invitation/models/invitation.model';
import { QuestCompletionModel } from '@/src/modules/quest/models/quest-completion.model';
import { QuestModel } from '@/src/modules/quest/models/quest.model';
import { RewardPurchaseModel } from '@/src/modules/reward/models/reward-purchase.model';
import { RewardModel } from '@/src/modules/reward/models/reward.model';
import { RoomModel } from '@/src/modules/room/models/room.model';
import { RoomMemberModel } from '@/src/modules/room/models/rooms-member.model';
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

	@Field(() => Date)
	updatedAt: Date;

	@Field(() => UserRole)
	role: UserRole;

	@Field(() => Int)
	stars: number;

	@Field(() => [QuestCompletionModel])
	completions: QuestCompletionModel[];

	@Field(() => [RewardPurchaseModel])
	reward: RewardPurchaseModel[];

	@Field(() => [RewardModel])
	rewardsPurchase: RewardModel[];

	@Field(() => [BoostActivationModel])
	boosts: BoostActivationModel[];

	@Field(() => [GoalModel])
	goals: GoalModel[];

	@Field(() => [QuestModel])
	quests: QuestModel[];

	@Field(() => [RoomMemberModel])
	rooms: RoomMemberModel[];

	@Field(() => [RoomModel])
	createdRooms: RoomModel[];

	@Field(() => [InvitationModel])
	roomInvitations: InvitationModel[];

	@Field(() => [UserModel], { nullable: 'items' })
	parents?: UserModel[];

	@Field(() => [UserModel], { nullable: 'items' })
	children?: UserModel[];
}
