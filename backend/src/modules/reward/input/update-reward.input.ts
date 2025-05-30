import { InputType, PartialType } from '@nestjs/graphql';

import { CreateRewardInput } from './create-reward.input';

@InputType('UpdateRewardInput')
export class UpdateRewardInput extends PartialType(CreateRewardInput) {}
