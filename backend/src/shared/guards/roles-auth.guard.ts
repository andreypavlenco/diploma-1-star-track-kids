import {
	type CanActivate,
	type ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import { UserRole } from '@/src/shared/type/user-role';

import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	async canActivate(ctx: ExecutionContext): Promise<boolean> {
		const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
			ctx.getHandler(),
			ctx.getClass(),
		]);
		if (!requiredRoles) {
			return true;
		}
		const gqlCtx = GqlExecutionContext.create(ctx);
		const user = gqlCtx.getContext().req.user;

		if (!requiredRoles.includes(user.role)) {
			throw new ForbiddenException(
				`You do not have permission; required roles: ${requiredRoles.join(', ')}`
			);
		}

		return true;
	}
}
