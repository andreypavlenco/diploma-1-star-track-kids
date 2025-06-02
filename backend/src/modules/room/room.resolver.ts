import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RoomMember, RoomOwner } from '@/src/shared/decorators/access.room.decorator';
import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { CreateRoomInput } from './input/create-room.input';
import { RoomModel } from './models/room.model';
import { RoomService } from './room.service';

@Resolver('Room')
export class RoomResolver {
	constructor(private readonly roomService: RoomService) {}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Mutation(() => RoomModel, { name: 'createRoom' })
	async create(@Args('data') input: CreateRoomInput, @Authorized('id') userId: string) {
		return this.roomService.create(input, userId);
	}

	@RoomMember()
	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => RoomModel, { name: 'findRoomById' })
	async findById(@Args('roomId') roomId: string) {
		return this.roomService.findById(roomId);
	}

	@RoomMember()
	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => [RoomModel], { name: 'findAllRoomsUser' })
	async findAll(@Authorized('id') userId: string) {
		return this.roomService.findAll(userId);
	}

	@RoomOwner()
	@Auth(UserRole.PARENT)
	@Mutation(() => Boolean, { name: 'deleteRoom' })
	async delete(@Args('roomId') roomId: string) {
		return this.roomService.delete(roomId);
	}

	@RoomOwner()
	@Auth(UserRole.PARENT)
	@Mutation(() => RoomModel, { name: 'updateRoom' })
	async update(@Args('roomId') roomId: string, @Args('data') input: CreateRoomInput) {
		return this.roomService.update(roomId, input);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => [RoomModel], { name: 'findAllQuestByRoomMemberId' })
	async findAllQuestByRoomMemberId(@Authorized('id') userId: string) {
		return this.roomService.findAllQuestByRoomMemberId(userId);
	}

}
