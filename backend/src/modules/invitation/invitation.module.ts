import { Module } from '@nestjs/common';

import { MailModule } from '../libs/mail/mail.module';

import { InvitationResolver } from './invitation.resolver';
import { InvitationService } from './invitation.service';

@Module({
	imports: [MailModule],
	providers: [InvitationResolver, InvitationService],
})
export class InvitationModule {}
