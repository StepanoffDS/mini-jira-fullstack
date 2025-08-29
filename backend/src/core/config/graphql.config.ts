import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { isDev } from 'src/shared/utils/is-dev.util';

export function getGraphQLConfig(
  configService: ConfigService,
): ApolloDriverConfig {
  return {
    graphiql: isDev(configService),
    path: configService.getOrThrow<string>('GRAPHQL_PATH'),
    autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
    sortSchema: true,
    introspection: true,
    context: ({ req, res }) => ({ req, res }),
    validationRules: [
      // GraphQL validation rules
    ],
    formatError: (error) => {
      if (error.extensions?.code === 'VALIDATION_ERROR') {
        return {
          message: error.message,
          code: 'VALIDATION_ERROR',
          details: error.extensions.details,
        };
      }
      return error;
    },
  };
}
