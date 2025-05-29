import { Module } from '@nestjs/common';

import { BoostModule } from '../boost/boost.module';

import { QuestResolver } from './quest.resolver';
import { QuestService } from './quest.service';

@Module({
	imports: [BoostModule],
	providers: [QuestResolver, QuestService],
})
export class QuestModule {}
