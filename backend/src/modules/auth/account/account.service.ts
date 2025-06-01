import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';

import { User } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import { CreateUserInput } from './input/create-user.input';

@Injectable()
export class AccountService {
	constructor(private readonly prisma: PrismaService) {}

	async findById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			include: {
				quests: true,
				createdRooms: true,
				rewards: true,
				rooms: {
					include: {
						room: true,
					},
				},
			},
		});
		return user;
	}

	async create(input: CreateUserInput): Promise<User> {
		const { email, password, role } = input;

		const isEmailExist = await this.prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (isEmailExist) {
			throw new Error('Email already exists');
		}
		const user = await this.prisma.user.create({
			data: {
				email,
				role,
				password: await hash(password),
			},
		});
		return user;
	}
}
