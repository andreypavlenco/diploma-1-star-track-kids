import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType('CreateGoalInput')
export class CreateGoalInput {
	@Field()
	title!: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => Int)
	@Min(1)
	starReward!: number;
}
