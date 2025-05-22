import { Field, ID, ObjectType } from '@nestjs/graphql';

import { UserModel } from '../../auth/account/models/user.model';

import { BoostModel } from './boost.model';

@ObjectType('BoostActivation')
export class BoostActivationModel {
	@Field(() => ID)
	id: string;

	@Field(() => Date)
	activatedAt: Date;

	@Field(() => Date)
	expiresAt: Date;

	@Field(() => BoostModel)
	boost: BoostModel;

	@Field(() => ID)
	boostId: string;

	@Field(() => UserModel)
	user: UserModel;

	@Field(() => ID)
	userId: string;
}
