import { Resolver } from '@nestjs/graphql';

import { RoomService } from './room.service';

@Resolver('Room')
export class RoomResolver {
	constructor(private readonly roomService: RoomService) {}
}
