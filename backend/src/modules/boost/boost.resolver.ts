import { Resolver } from '@nestjs/graphql';

import { BoostService } from './boost.service';

@Resolver('Boost')
export class BoostResolver {
	constructor(private readonly boostService: BoostService) {}
}
