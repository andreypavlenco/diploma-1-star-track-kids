import {
	type CanActivate,
	type ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { PrismaService } from '@/src/core/prisma/prisma.service';

import { GqlContext } from '../type/gql-context.type';

@Injectable()
export class RoomMemberGuard implements CanActivate {
	constructor(private readonly prisma: PrismaService) {}

	async canActivate(ctx: ExecutionContext): Promise<boolean> {
		const gqlCtx = GqlExecutionContext.create(ctx);
		const { roomId } = gqlCtx.getArgs<{ roomId: string }>();
		const { req } = gqlCtx.getContext<GqlContext>();
		const user = req.user;
		const exists = await this.prisma.room.findFirst({
			where: { id: roomId, members: { some: { user } } },
			select: { id: true },
		});
		if (!exists) throw new ForbiddenException('Access only for room members');
		return true;
	}
}
