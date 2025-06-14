import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateRoomInput {
	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	name: string;
}
