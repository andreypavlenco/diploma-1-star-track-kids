import { Module } from '@nestjs/common';

import { RewardResolver } from './reward.resolver';
import { RewardService } from './reward.service';

@Module({
	providers: [RewardResolver, RewardService],
})
export class RewardModule {}
