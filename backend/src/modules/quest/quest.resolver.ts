import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RoomMember } from '@/src/shared/decorators/access.room.decorator';
import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { CreateQuestInput } from './input/create-quest.input';
import { ChildrenActivityResult, QuestModel } from './models/quest.model';
import { QuestService } from './quest.service';

@Resolver('Quest')
export class QuestResolver {
	constructor(private readonly questService: QuestService) {}

	@RoomMember()
	@Auth(UserRole.PARENT)
	@Mutation(() => QuestModel, { name: 'createQuest' })
	async create(
		@Args('roomId') roomId: string,
		@Args('data') input: CreateQuestInput,
		@Authorized('id') userId: string
	) {
		return this.questService.create(roomId, input, userId);
	}

	@RoomMember()
	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => [QuestModel], { name: 'findAllQuestRoom' })
	async findAll(@Args('roomId') roomId: string) {
		return this.questService.findAll(roomId);
	}

	@RoomMember()
	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => QuestModel, { name: 'findByIdQuest' })
	async findById(@Args('roomId') roomId: string, @Args('questId') questId: string) {
		return this.questService.findById(questId, roomId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => ChildrenActivityResult, { name: 'getChildrenActivity' })
	async getChildrenActivity(@Authorized('id') parentId: string) {
		return this.questService.getChildrenActivity(parentId);
	}

	@RoomMember()
	@Auth(UserRole.PARENT)
	@Mutation(() => QuestModel, { name: 'updateQuest' })
	async update(@Args('questId') questId: string, @Args('data') input: CreateQuestInput) {
		return this.questService.update(questId, input);
	}

	@RoomMember()
	@Auth(UserRole.PARENT)
	@Mutation(() => QuestModel, { name: 'deleteQuest' })
	async delete(@Args('questId') questId: string) {
		return this.questService.delete(questId);
	}

	@Auth(UserRole.CHILD, UserRole.PARENT)
	@Mutation(() => Boolean, { name: 'questCompletion' })
	async questCompletion(@Args('questId') questId: string, @Authorized('id') userId: string) {
		return this.questService.questCompletion(userId, questId);
	}
}
