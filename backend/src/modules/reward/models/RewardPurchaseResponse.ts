import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RewardPurchaseResponse {
	@Field()
	success: boolean;

	@Field({ nullable: true })
	message?: string;
}
