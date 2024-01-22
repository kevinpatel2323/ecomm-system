import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: ConfigService = app.get(ConfigService);
  const port: number = appConfig.get<number>('PORT') || 8083;

  // swagger service setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('E-comm Application')
    .setDescription('The E Comm API documentation')
    .setVersion('1.0')
    .addTag('APP')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  app.use(
    urlencoded({
      extended: true,
      limit: '50mb',
    }),
  );
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,FETCH',
    credentials: true,
  });
  app.use('/live', (req: any, res: any) => {
    res.status(200).send('Server is up and running');
  });

  const currentDate = new Date();
  const timestamp = `[${currentDate.toLocaleString()}]`;
  await app.listen(port, () => {
    console.log(
      `\x1b[32m[Nest] - \x1b[0m${timestamp}    \x1b[32mSwagger UI is available on ${appConfig.get<string>(
        'BASE_URL',
      )}/docs`,
    );
    console.log(
      `\x1b[32m[Nest] - \x1b[0m${timestamp}    \x1b[32mSwagger JSON is available on ${appConfig.get<string>(
        'BASE_URL',
      )}/docs-json`,
    );
    console.log(
      `\x1b[32m[Nest] - \x1b[0m${timestamp}    \x1b[32mAPI server is available on ${appConfig.get<string>(
        'BASE_URL',
      )}`,
    );
  });
}
bootstrap();
