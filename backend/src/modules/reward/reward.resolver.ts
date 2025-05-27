import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RoomMember } from '@/src/shared/decorators/access.room.decorator';
import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { CreateRewardInput } from './input/create-reward.input';
import { UpdateRewardInput } from './input/update-reward.input';
import { RewardModel } from './models/reward.model';
import { RewardService } from './reward.service';

@Resolver('Reward')
export class RewardResolver {
	constructor(private readonly rewardService: RewardService) {}

	@Auth(UserRole.PARENT)
	@Mutation(() => RewardModel, { name: 'createReward' })
	async create(@Args('data') input: CreateRewardInput, @Authorized('id') userId: string) {
		return this.rewardService.create(userId, input);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => RewardModel, { name: 'findRewardById' })
	async findById(@Args('rewardId') rewardId: string) {
		return this.rewardService.findById(rewardId);
	}

	@RoomMember()
	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => RewardModel, { name: 'findByCreatorId' })
	async findByCreatorId(@Authorized('id') userId: string) {
		return this.rewardService.findByCreatorId(userId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => Boolean, { name: 'deleteReward' })
	async delete(@Args('rewardId') rewardId: string) {
		return this.rewardService.delete(rewardId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => RewardModel, { name: 'updateReward' })
	async update(@Args('data') input: UpdateRewardInput, @Args('rewardId') rewardId: string) {
		return this.rewardService.update(rewardId, input);
	}

	@Auth(UserRole.CHILD)
	@Query(() => [RewardModel], { name: 'findRewardsForChild' })
	async findRewardsForChild(@Authorized('id') childId: string) {
		return this.rewardService.findRewardsForChild(childId);
	}
}
