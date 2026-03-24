import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['error', 'warn']
        : ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') || 8080;

  // CORS Configuration
  const corsOptions: CorsOptions = {
    origin: configService.get<string>('app.corsOrigins')?.split(',') || [], // Allow requests from this origin
    credentials: true, // Allow cookies to be sent across domains
  };

  // Global Configurations
  const appPrefix = configService.get<string>('app.appPrefix') || 'api/v1';
  app.enableCors(corsOptions);
  app.setGlobalPrefix(appPrefix, {
    exclude: [
      { path: 'docs', method: RequestMethod.ALL },
      { path: '/', method: RequestMethod.ALL },
    ],
  });

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('netmarket API')
    .setDescription('Netmarket API description')
    .setVersion('1.0')
    .addTag('site-analysis-api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Serve empty service worker to suppress 404
  app.use('/sw.js', (_: Request, res: Response) => {
    res.type('application/javascript');
    res.send('');
  });

  // global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);
}
bootstrap();
