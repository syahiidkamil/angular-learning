import { HomeService } from './../services/home.service';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const homeService = inject(HomeService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        return homeService.getRefreshedAuthToken().pipe(
          switchMap((newToken: string) => {
            homeService.setAccessToken(newToken);
            const reqWithLatestAccessToken = req.clone({
              headers: req.headers.append('Authorization', newToken),
            });
            return next(reqWithLatestAccessToken);
          }),
          catchError((refreshError) => {
            return throwError(
              () => new Error('refresh token error:', refreshError)
            );
          })
        );
      } else {
        return throwError(() => err);
      }
    })
  );
};
