import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { BoostService } from './boost.service';
import { BoostActivationModel } from './models/boost-activation.model';
import { BoostModel } from './models/boost.model';

@Resolver('Boost')
export class BoostResolver {
	constructor(private readonly boostService: BoostService) {}

	//@Auth(UserRole.CHILD, UserRole.PARENT)
	@Query(() => [BoostModel], { name: 'listAllBoosts' })
	async listAll() {
		return this.boostService.listAll();
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => BoostModel, { name: 'findByIdBoost' })
	async findAll(@Args('boostId') boostId: string) {
		return this.boostService.findById(boostId);
	}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => [BoostModel], { name: 'getUserActivations' })
	async getUserActivations(@Authorized('id') userId: string) {
		return this.boostService.getUserActivations(userId);
	}

	@Auth(UserRole.CHILD)
	@Mutation(() => BoostActivationModel, { name: 'activateBoost' })
	async activate(@Args('boostId') boostId: string, @Authorized('id') userId: string) {
		return this.boostService.activate(boostId, userId);
	}

	@Auth(UserRole.CHILD)
	@Query(() => BoostActivationModel, { name: 'getActiveBoosts' })
	async getActiveBoosts(@Authorized('id') userId: string) {
		return this.boostService.getActiveBoosts(userId);
	}
}
