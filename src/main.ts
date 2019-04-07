import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestIntercenptor } from './common/interceptor/request.interceptor';
import { TimeoutInterceptor } from './common/interceptor/timeout.interceptor';
import { Signverify } from './common/guard/auth.guard';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * @desc guards protect http request is verified
   */
  app.useGlobalGuards(new Signverify());
  /**
   * @desc global interceptor schema
   */
  app.useGlobalInterceptors(new RequestIntercenptor(), new TimeoutInterceptor());
  dotenv.config();
  await app.listen(8034);
  process.stdout.write('your application is running at localhost:8034\n');
}
bootstrap();
