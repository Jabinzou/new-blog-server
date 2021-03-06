import { CanActivate, ExecutionContext, HttpStatus, HttpException} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as md5 from 'md5';
export class Signverify implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const sign = md5(
      JSON.stringify({
        timeStamp: +req.headers.time_stamp,
        data: {} + 'kissmyass'}),
    );
    if (req.headers.auth_sign !== sign) {
      throw new HttpException('you have wrong sign!', HttpStatus.FORBIDDEN);
    }
    return true;
  }
}