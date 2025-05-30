import { Module } from '@nestjs/common';

import { GoalResolver } from './goal.resolver';
import { GoalService } from './goal.service';

@Module({
	providers: [GoalResolver, GoalService],
})
export class GoalModule {}
