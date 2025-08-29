import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountModule } from 'src/modules/auth/account/account.module';
import { TasksModule } from 'src/modules/tasks/tasks.module';
import { IS_DEV_ENV } from 'src/shared/utils/is-dev.util';
import { getGraphQLConfig } from './config/graphql.config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getGraphQLConfig(configService),
      inject: [ConfigService],
    }),
    PrismaModule,
    TasksModule,
    AccountModule,
  ],
  controllers: [],
})
export class CoreModule {}
