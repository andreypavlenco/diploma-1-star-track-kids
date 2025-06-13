import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Invitation } from '@/prisma/generated';
import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { CreateInvitationInput } from './input/create-invitation.input';
import { InvitationService } from './invitation.service';
import { InvitationModel } from './models/invitation.model';

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

	@Query(() => InvitationModel, { nullable: true })
	async getInvitationInfo(@Args('token') token: string): Promise<Invitation | null> {
		return this.invitationService.findByToken(token);
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
