import { Field, ID, ObjectType } from '@nestjs/graphql';

import { UserRole } from '@/src/shared/type/user-role';

import { UserModel } from '../../auth/account/models/user.model';

import { RoomModel } from './room.model';

@ObjectType('RoomMember')
export class RoomMemberModel {
	@Field(() => ID)
	id: string;

	@Field(() => RoomModel)
	room: RoomModel;

	@Field(() => ID)
	roomId: string;

	@Field(() => UserModel)
	user: UserModel;

	@Field(() => ID)
	userId: string;

	@Field(() => UserRole)
	role: UserRole;

	@Field(() => Date)
	joinedAt: Date;
}
