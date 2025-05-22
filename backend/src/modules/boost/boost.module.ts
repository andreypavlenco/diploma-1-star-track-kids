import { Module } from '@nestjs/common';

import { BoostResolver } from './boost.resolver';
import { BoostService } from './boost.service';

@Module({
	providers: [BoostResolver, BoostService],
})
export class BoostModule {}
