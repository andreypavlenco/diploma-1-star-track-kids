import { Resolver } from '@nestjs/graphql';

import { QuestService } from './quest.service';

@Resolver('Quest')
export class QuestResolver {
	constructor(private readonly questService: QuestService) {}
}
