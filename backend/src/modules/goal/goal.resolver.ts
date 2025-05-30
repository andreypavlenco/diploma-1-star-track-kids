import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { GoalService } from './goal.service';
import { CreateGoalInput } from './input/create-goal.input';
import { UpdateGoalInput } from './input/update-goal.input';
import { GoalModel } from './models/goal.model';

@Resolver('Goal')
export class GoalResolver {
	constructor(private readonly goalService: GoalService) {}

	@Auth(UserRole.PARENT)
	@Mutation(() => GoalModel, { name: 'createGoal' })
	async create(@Args('data') input: CreateGoalInput, @Authorized('id') userId: string) {
		return this.goalService.create(userId, input);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => GoalModel, { name: 'findGoalById' })
	async findById(@Args('goalId') goalId: string) {
		return this.goalService.findById(goalId);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => [GoalModel], { name: 'findByCreatorId' })
	async findByCreatorId(@Authorized('id') userId: string) {
		return this.goalService.findByCreatorId(userId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => Boolean, { name: 'deleteGoal' })
	async delete(@Args('goalId') goalId: string) {
		return this.goalService.delete(goalId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => GoalModel, { name: 'updateGoal' })
	async update(@Args('data') input: UpdateGoalInput, @Args('goalId') goalId: string) {
		return this.goalService.update(goalId, input);
	}

	@Auth(UserRole.PARENT)
	@Query(() => [GoalModel], { name: 'findCompletedGoals' })
	async findCompletedGoals(@Authorized('id') userId: string) {
		return this.goalService.findCompletedGoals(userId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => GoalModel, { name: 'completeGoal' })
	async completeGoal(@Args('goalId') goalId: string) {
		return this.goalService.completeGoal(goalId);
	}

	@Auth(UserRole.PARENT)
	@Mutation(() => GoalModel, { name: 'uncompleteGoal' })
	async uncompleteGoal(@Args('goalId') goalId: string) {
		return this.goalService.uncompleteGoal(goalId);
	}

	@Auth(UserRole.PARENT)
	@Query(() => [GoalModel], { name: 'findActiveGoals' })
	async findActiveGoals(@Authorized('id') userId: string) {
		return this.goalService.findActiveGoals(userId);
	}

	@Auth(UserRole.CHILD)
	@Query(() => GoalModel, { name: 'findGoalForChild' })
	async findGoalForChild(@Authorized('id') childId: string) {
		return this.goalService.findGoalForChild(childId);
	}
}
