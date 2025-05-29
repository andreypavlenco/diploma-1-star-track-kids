import { MailerOptions } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

export function getMailerConfig(configService: ConfigService): MailerOptions {
	return {
		transport: {
			host: configService.getOrThrow<string>('EMAIL_HOST'),
			port: configService.getOrThrow<number>('EMAIL_PORT'),
			secure: false,
			auth: {
				user: configService.getOrThrow<string>('EMAIL_LOGIN'),
				pass: configService.getOrThrow<string>('EMAIL_PASS'),
			},
		},
		defaults: {
			from: `"No Reply"  ${configService.getOrThrow<string>('EMAIL_LOGIN')}>`,
		},
	};
}
