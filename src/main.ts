import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사용 파이프 생성
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // transform은 controller에서 타입을 원하는 것으로 바꿈 => controller.ts
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
