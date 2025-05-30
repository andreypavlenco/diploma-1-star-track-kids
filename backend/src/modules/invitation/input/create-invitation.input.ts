import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsEmail, IsEnum } from 'class-validator';

import { UserRole } from '@/src/shared/type/user-role';

@InputType('CreateInvitationInput')
export class CreateInvitationInput {
	@Field(() => String)
	@IsEmail()
	email: string;

	@Field(() => UserRole)
	@IsEnum(UserRole)
	role: UserRole;
}
