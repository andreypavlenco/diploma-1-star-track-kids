import { InputType, PartialType } from '@nestjs/graphql';

import { CreateGoalInput } from './create-goal.input';

@InputType('UpdateGoalInput')
export class UpdateGoalInput extends PartialType(CreateGoalInput) {}
