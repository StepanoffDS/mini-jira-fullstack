import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { CoreModule } from './core/core.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const configService = app.get(ConfigService);

  app.use(cookieParser(configService.getOrThrow<string>('COOKIE_SECRET')));
}
void bootstrap();
