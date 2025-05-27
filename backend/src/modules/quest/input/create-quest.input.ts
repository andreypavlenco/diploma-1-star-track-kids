import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType('CreateQuestInput')
export class CreateQuestInput {
	@Field(() => String)
	title: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => Date)
	deadline: Date;

	@Field(() => Int)
	difficulty: number;

	@Field(() => ID, { nullable: true })
	goalId?: string;

	@Field(() => ID)
	roomId: string;
}
