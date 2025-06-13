import { Query, Resolver } from '@nestjs/graphql';

import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { AnalycticsService } from './analytics.service';
import {
	BoostUsage,
	QuestCompletionStat,
	RoomUserCount,
	UserRoleCount,
	UserStars,
} from './models/models';

@Resolver('Analyctics')
export class AnalycticsResolver {
	constructor(private readonly analycticsService: AnalycticsService) {}

	@Auth(UserRole.PARENT)
	@Query(() => [UserRoleCount], { name: 'userCountByRole' })
	async userCountByRole(@Authorized('id') parentId: string) {
		return this.analycticsService.getUserCountByRole(parentId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => [UserStars], { name: 'topUsersByStars' })
	async topUsersByStars(@Authorized('id') parentId: string) {
		return this.analycticsService.getTopUsersByStars(parentId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => [QuestCompletionStat], { name: 'questCompletionsByDay' })
	async questCompletionsByDay(@Authorized('id') parentId: string) {
		return this.analycticsService.getQuestCompletionsByDay(parentId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => Number, { name: 'totalRewardsPurchased' })
	async totalRewardsPurchased(@Authorized('id') parentId: string) {
		return this.analycticsService.getTotalRewardsPurchased(parentId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => [BoostUsage], { name: 'topBoosts' })
	async topBoosts(@Authorized('id') parentId: string) {
		return this.analycticsService.getTopBoosts(parentId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => [RoomUserCount], { name: 'roomUserCounts' })
	async roomUserCounts(@Authorized('id') parentId: string) {
		return this.analycticsService.getRoomUserCounts(parentId);
	}
}
