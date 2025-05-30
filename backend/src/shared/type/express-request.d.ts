import 'express';

import { UserRole } from '@/prisma/generated';

declare module 'express' {
	interface RequestUser {
		id: string;
		email: string;
		role: UserRole;
	}
	interface Request {
		user: RequestUser;
	}
}
