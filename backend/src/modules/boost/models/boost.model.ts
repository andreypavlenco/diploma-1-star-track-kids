import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { BoostActivationModel } from './boost-activation.model';

@ObjectType('Boost')
export class BoostModel {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field({ nullable: true })
	description?: string;

	@Field(() => Int)
	cooldownDays: number;

	@Field(() => Int)
	durationHours: number;

	@Field(() => [BoostActivationModel], { nullable: true })
	activations?: BoostActivationModel[];
}
