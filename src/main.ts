import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { RequestIntercenptor } from './common/interceptor/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * global interceptor schema
   */
  app.useGlobalInterceptors(new RequestIntercenptor());
  await app.listen(8034);
  process.stdout.write('your application is running at localhost:8034\n');
}
bootstrap();
