import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

import { UserRole } from '@/src/shared/type/user-role';

@InputType()
export class CreateUserInput {
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@Field(() => String)
	email: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(6)
	@Field(() => String)
	password: string;

	@IsEnum(UserRole)
	@Field(() => UserRole)
	role: UserRole;
}
