import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loggingInterceptor req: ', req); // request

  return next(req).pipe(
    tap((event) => {
      // response
      if (event.type === HttpEventType.Response) {
        console.log('loggingInterceptor res: returned a response', {
          event,
        });
      }
    })
  );
};
