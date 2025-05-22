import { Field, ID, ObjectType } from '@nestjs/graphql';

import { UserRole } from '@/src/shared/type/user-role';

import { UserModel } from '../../auth/account/models/user.model';

import { RoomModel } from './room.model';

@ObjectType('Invitation')
export class InvitationModel {
	@Field(() => ID)
	id: string;

	@Field(() => RoomModel)
	room: RoomModel;

	@Field(() => ID)
	roomId: string;

	@Field()
	email: string;

	@Field(() => UserRole)
	role: UserRole;

	@Field()
	token: string;

	@Field(() => Date)
	expiresAt: Date;

	@Field(() => UserModel)
	invitedBy: UserModel;

	@Field(() => ID)
	invitedById: string;

	@Field(() => Date, { nullable: true })
	acceptedAt?: Date;
}
