import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8034);
  process.stdout.write('your application is running at localhost:8034');
}
bootstrap();
