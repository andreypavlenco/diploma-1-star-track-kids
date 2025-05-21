import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

import { isDev } from '@/src/shared/utils/is.dev-util';

export function getGraphqlConfig(configServise: ConfigService): ApolloDriverConfig {
	return {
		playground: isDev(configServise),
		path: configServise.get<string>('GRAPHQL_PREFIX'),
		autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
		sortSchema: true,
		context: ({ req, res }) => ({ req, res }),
	};
}
