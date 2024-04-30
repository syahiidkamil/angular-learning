import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassLoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('ClassLoggingInterceptor req: ', req); // request

    return handler.handle(req).pipe(
      tap((event) => {
        // response
        if (event.type === HttpEventType.Response) {
          console.log('ClassLoggingInterceptor res: returned a response', {
            event,
          });
        }
      })
    );
  }
}
