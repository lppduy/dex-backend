import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from '../interfaces/database-config.interface';

export default registerAs(
  'database',
  (): DatabaseConfig => ({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    uri: process.env.DATABASE_URI,
  }),
);
