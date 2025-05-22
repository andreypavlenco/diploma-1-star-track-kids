import { Resolver } from '@nestjs/graphql';

import { RewardService } from './reward.service';

@Resolver('Reward')
export class RewardResolver {
	constructor(private readonly rewardService: RewardService) {}
}
