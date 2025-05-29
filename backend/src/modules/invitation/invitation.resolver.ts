import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { CreateInvitationInput } from './input/create-invitation.input';
import { InvitationService } from './invitation.service';

@Resolver('Invitation')
export class InvitationResolver {
	constructor(private readonly invitationService: InvitationService) {}

	@Auth(UserRole.PARENT)
	@Mutation(() => Boolean, { name: 'createInvitation' })
	async create(
		@Args('data') input: CreateInvitationInput,
		@Args('roomId') roomId: string,
		@Authorized('id') userId: string
	) {
		return this.invitationService.create(input, roomId, userId);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Mutation(() => Boolean, { name: 'acceptInvitation' })
	async acceptInvitation(
		@Args('token') token: string,
		@Authorized('id') userId: string
	): Promise<boolean> {
		return this.invitationService.acceptInvitation(token, userId);
	}
}
