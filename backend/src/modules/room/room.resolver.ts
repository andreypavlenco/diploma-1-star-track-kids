import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

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

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => RoomModel, { name: 'findRoomById' })
	async findById(@Args('roomId') roomId: string, @Authorized('id') userId: string) {
		return this.roomService.findById(roomId, userId);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => [RoomModel], { name: 'findAllRoomsUser' })
	async findAll(@Authorized('id') userId: string) {
		return this.roomService.findAll(userId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => Boolean, { name: 'deleteRoom' })
	async delete(@Authorized('id') userId: string, @Args('roomId') roomId: string) {
		return this.roomService.delete(userId, roomId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => [RoomModel], { name: 'updateRoom' })
	async update(
		@Args('roomId') roomId: string,
		@Authorized('id') userId: string,
		@Args('date') input: CreateRoomInput
	) {
		return this.roomService.update(roomId, input, userId);
	}
}
