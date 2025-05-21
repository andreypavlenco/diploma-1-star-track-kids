import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AccountService } from './account.service';
import { CreateUserInput } from './input/create-user.input';
import { UserModel } from './models/user.model';

@Resolver('Account')
export class AccountResolver {
	constructor(private readonly accountService: AccountService) {}

	@Query(() => [UserModel], { name: 'findAllUsers' })
	async findAll() {
		return this.accountService.findAll();
	}

	@Mutation(() => UserModel, { name: 'createUser' })
	async create(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input);
	}
}
