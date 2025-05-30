import { applyDecorators, UseGuards } from '@nestjs/common';

import { UserRole } from '@/prisma/generated';

import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { RolesGuard } from '../guards/roles-auth.guard';

import { Roles } from './roles.decorator';

export function Auth(...roles: UserRole[]) {
	return applyDecorators(Roles(...roles), UseGuards(GqlAuthGuard, RolesGuard));
}
