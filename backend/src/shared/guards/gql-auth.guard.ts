import {
	type CanActivate,
	type ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { PrismaService } from '@/src/core/prisma/prisma.service';

import { GqlContext } from '../type/gql-context.type';

@Injectable()
export class GqlAuthGuard implements CanActivate {
	public constructor(private readonly prisma: PrismaService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context);
		const request = ctx.getContext<GqlContext>().req;

		if (typeof request.session.userId === 'undefined') {
			throw new UnauthorizedException('User not authenticated');
		}

		const user = await this.prisma.user.findUnique({
			where: { id: request.session.userId },
			select: { id: true, email: true, role: true },
		});
		if (!user) throw new UnauthorizedException('User not found');

		request.user = user;
		return true;
	}
}
