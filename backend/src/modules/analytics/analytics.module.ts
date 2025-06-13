import { Module } from '@nestjs/common';

import { AnalycticsResolver } from './analytics.resolver';
import { AnalycticsService } from './analytics.service';

@Module({
	providers: [AnalycticsService, AnalycticsResolver],
})
export class AnalyticsModule {}
