import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwaggerModule } from './swagger/useSwaggerModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useSwaggerModule(app);
  await app.listen(3000);
}
bootstrap();
