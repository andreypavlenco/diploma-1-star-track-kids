import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Auth } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { UserRole } from '@/src/shared/type/user-role';

import { AccountService } from './account.service';
import { CreateUserInput } from './input/create-user.input';
import { UserModel } from './models/user.model';

@Resolver('Account')
export class AccountResolver {
	constructor(
		private readonly accountService: AccountService,
		private readonly prisma: PrismaService
	) {}

	@Auth(UserRole.PARENT, UserRole.CHILD)
	@Query(() => UserModel, { name: 'findProfile' })
	async findById(@Authorized('id') id: string) {
		return this.accountService.findById(id);
	}

	@Mutation(() => UserModel, { name: 'createUser' })
	async create(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input);
	}

	@Query(() => Boolean)
	async checkUserExists(@Args('email') email: string): Promise<boolean> {
		const user = await this.prisma.user.findUnique({ where: { email } });
		return !!user;
	}
}
