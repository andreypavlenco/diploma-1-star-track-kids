import { Module } from '@nestjs/common';

import { QuestResolver } from './quest.resolver';
import { QuestService } from './quest.service';

@Module({
	providers: [QuestResolver, QuestService],
})
export class QuestModule {}
