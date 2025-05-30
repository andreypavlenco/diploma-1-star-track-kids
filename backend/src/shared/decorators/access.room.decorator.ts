import { applyDecorators, UseGuards } from '@nestjs/common';

import { RoomMemberGuard } from '../guards/room-member.guard';
import { RoomOwnerGuard } from '../guards/room-owner.guard';

export function RoomMember() {
	return applyDecorators(UseGuards(RoomMemberGuard));
}

export function RoomOwner() {
	return applyDecorators(UseGuards(RoomOwnerGuard));
}
