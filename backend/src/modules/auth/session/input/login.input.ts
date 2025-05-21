import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
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
}
