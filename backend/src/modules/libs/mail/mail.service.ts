import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { render } from '@react-email/components';

import { InvitationTemplate } from './templates/invitation';

@Injectable()
export class MailService {
	public constructor(
		private readonly configService: ConfigService,
		private readonly mailerService: MailerService
	) {}

	async sendInvitationEmail(email: string, token: string): Promise<void> {
		const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
		const html = await render(InvitationTemplate({ domain, token }));

		return this.sendMail(email, 'Запрошення до кімнати', html);
	}

	private sendMail(email: string, subject: string, html: string) {
		return this.mailerService.sendMail({
			to: email,
			subject,
			html,
		});
	}
}
