import { Global, Module } from '@nestjs/common';

import { GqlAuthGuard } from './gql-auth.guard';
import { RolesGuard } from './roles-auth.guard';
import { RoomMemberGuard } from './room-member.guard';
import { RoomOwnerGuard } from './room-owner.guard';

@Global()
@Module({
	providers: [GqlAuthGuard, RolesGuard, RoomOwnerGuard, RoomMemberGuard],
	exports: [GqlAuthGuard, RolesGuard, RoomOwnerGuard, RoomMemberGuard],
})
export class GuardModule {}
