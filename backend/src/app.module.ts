import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AllExceptionsFilter } from './common/filters/AllException.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { LoggerModule } from './common/logger/logger.module';

// import { CacheModule } from '@nestjs/cache-manager';
// import { redisStore } from 'cache-manager-redis-yet';
// import { ConfigService } from '@nestjs/config';

import { AppConfigModule } from './config/app.config.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    AppConfigModule,
    LoggerModule,
    PrismaModule,
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60 * 60,
        limit: 10,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
