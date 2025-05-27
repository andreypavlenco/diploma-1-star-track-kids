import {
	type CanActivate,
	type ExecutionContext,
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { PrismaService } from '@/src/core/prisma/prisma.service';

import { GqlContext } from '../type/gql-context.type';

@Injectable()
export class RoomOwnerGuard implements CanActivate {
	constructor(private readonly prisma: PrismaService) {}

	async canActivate(ctx: ExecutionContext): Promise<boolean> {
		const gqlCtx = GqlExecutionContext.create(ctx);
		const { roomId } = gqlCtx.getArgs<{ roomId: string }>();
		const { req } = gqlCtx.getContext<GqlContext>();
		const user = req.user;
		const access = await this.prisma.room.findUnique({
			where: { id: roomId },
			select: { createUserId: true },
		});
		if (!access) throw new NotFoundException('Room not found');
		if (access.createUserId !== user.id) {
			throw new ForbiddenException('Only owner can perform this action');
		}

		return true;
	}
}
