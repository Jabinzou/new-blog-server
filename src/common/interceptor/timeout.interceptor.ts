import { ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/**
 * @desc 5000ms will stop request operation
 */
export class TimeoutInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(timeout(5000));
  }
}
