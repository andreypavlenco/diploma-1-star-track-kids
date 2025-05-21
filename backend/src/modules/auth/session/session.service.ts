import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify } from 'argon2';
import { Request } from 'express';

import { PrismaService } from '@/src/core/prisma/prisma.service';

import { LoginInput } from './input/login.input';

@Injectable()
export class SessionService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) {}

	async login(req: Request, input: LoginInput) {
		const { email, password } = input;

		const user = await this.prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const isValidPassword = await verify(user.password, password);
		if (!isValidPassword) {
			throw new UnauthorizedException('Data not valid');
		}

		return new Promise((resolve, reject) => {
			req.session.createAt = new Date();
			req.session.userId = user.id;

			req.session.save(err => {
				if (err) {
					return reject(new InternalServerErrorException('Session save error'));
				}
				resolve(user);
			});
		});
	}

	async logout(req: Request) {
		return new Promise((resolve, reject) => {
			req.session.destroy(err => {
				if (err) {
					return reject(new InternalServerErrorException('Session destroy error'));
				}
				req.res.clearCookie(this.configService.getOrThrow('SESSION_NAME'));
				resolve(true);
			});
		});
	}
}
