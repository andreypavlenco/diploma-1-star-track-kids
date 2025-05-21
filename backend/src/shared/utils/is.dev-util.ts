import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

export function isDev(configServise: ConfigService): boolean {
	return configServise.get('NODE_ENV') === 'development';
}

export const IS_DEV_ENV = process.env.NODE_ENV === 'development';
