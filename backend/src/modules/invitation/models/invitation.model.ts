import { Field, ID, ObjectType } from '@nestjs/graphql';

import { UserRole } from '@/src/shared/type/user-role';

import { UserModel } from '../../auth/account/models/user.model';
import { RoomModel } from '../../room/models/room.model';

@ObjectType('Invitation')
export class InvitationModel {
	@Field(() => ID)
	id: string;

	@Field(() => RoomModel)
	room: RoomModel;

	@Field(() => ID)
	roomId: string;

	@Field(() => String)
	email: string;

	@Field(() => UserRole)
	role: UserRole;

	@Field(() => String)
	token: string;

	@Field(() => Date)
	expiresAt: Date;

	@Field(() => UserModel)
	invitedBy?: UserModel;

	@Field(() => ID)
	invitedById?: string;

	@Field(() => Date)
	acceptedAt?: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
}
