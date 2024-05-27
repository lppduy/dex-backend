import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './interfaces/database-config.interface';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const dbConfig = configService.get<DatabaseConfig>('database');

  logger.debug(`NODE_ENV: ${configService.get('NODE_ENV')}`);
  logger.debug(`PORT: ${configService.get('PORT')}`);
  logger.debug(`DATABASE_HOST: ${dbConfig?.port}`);

  const port = configService.get('PORT') || 3000;
  await app.listen(port, () =>
    logger.log(`Server started on http://localhost:${port}`),
  );
}
bootstrap();
