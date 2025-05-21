import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
	PARENT = 'PARENT',
	CHILD = 'CHILD',
}

registerEnumType(UserRole, {
	name: 'UserRole',
});
