import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator';

@InputType('CreateRewardInput')
export class CreateRewardInput {
	@Field(() => String)
	@MinLength(3)
	@MaxLength(100)
	title!: string;

	@Field(() => String, { nullable: true })
	@IsOptional()
	@MaxLength(500)
	description?: string;

	@Field(() => Int)
	@Min(1)
	@Max(1000)
	starCost!: number;
}
