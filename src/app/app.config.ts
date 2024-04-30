import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';
import { conditionalInterceptor } from './interceptors/conditional.interceptor';
import { ClassLoggingInterceptor } from './interceptors/class-logging.interceptor';
import { ClassLogging2Interceptor } from './interceptors/class-logging-2.interceptor';
import { cancelSameApiRequestsInterceptor } from './interceptors/cancel-same-api-requests.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loggingInterceptor,
        authInterceptor,
        retryInterceptor,
        conditionalInterceptor,
        cancelSameApiRequestsInterceptor,
      ]),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClassLoggingInterceptor,
      multi: true,
    },
    provideAnimationsAsync(),
  ],
};
