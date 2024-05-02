import {
  HttpEventType,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { of, tap } from 'rxjs';

interface CacheEntry {
  response: HttpResponse<any>;
  timestamp: number;
  expiryTime: number;
}

const cache: any = {};
const cacheDuration = 5 * 60 * 1000;

export const simpleCacheWithExpiryTimeInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const currentTime = Date.now();
  // if (req.context.get(NO_CACHE)) {
  //   return next(req);
  // }

  const url = req.urlWithParams;
  const cacheEntry: CacheEntry = cache[`${url}`];
  const {
    response: responceCache,
    timestamp: cacheTimestamp,
    expiryTime: cacheExpiryTime,
  } = cacheEntry;

  // const responceCache = cacheEntry.response;
  // const cacheTimestamp = cacheEntry.timestamp;
  // const cacheExpiryTime = cacheEntry.expiryTime;

  // const isExpired = currentTime - cacheTimestamp > cacheDuration;

  const isExpired = currentTime > cacheExpiryTime;

  if (responceCache && !isExpired) {
    return of(responceCache);
  }

  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        cache[`${url}`] = {
          response: event.clone(),
          timestamp: currentTime,
          expiryTime: currentTime + cacheDuration,
        };
      }
    })
  );
};
