import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT || '8080', 10),
  corsOrigins: process.env.CORS_ORIGINS,
  nodeENV: process.env.NODE_ENV || 'development',
  appPrefix: process.env.APP_PREFIX || '/api/v1',
  // redisHost: process.env.REDIS_HOST,
  // redisPort: process.env.REDIS_PORT,
}));
