import { HttpInterceptorFn } from '@angular/common/http';
import { finalize, Subject, takeUntil } from 'rxjs';

// const pendingRequestsMap = new Map<string, Subject<void>>();

const pendingRequestsObject: any = {}; // bisa dioptimize untuk antisipasi memory leak

export const cancelSameApiRequestsInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const url = req.urlWithParams;
  console.log('pendingRequestsObject', pendingRequestsObject);

  // const pendingRequest$ = pendingRequestsMap.get(url);

  const pendingRequest$ = pendingRequestsObject[`${url}`];

  // truthy concept
  if (
    pendingRequest$
    // || Boolean(pendingRequest$)
    // || !!pendingRequest$
  ) {
    console.log('cancelSameApiRequestsInterceptor');

    pendingRequest$.next(); // STOP
    // pendingRequest$.delete();
  }

  const newRequest$ = new Subject<void>();

  pendingRequestsObject[`${url}`] = newRequest$;
  // pendingRequestsMap.set(url, newRequest$);

  return next(req).pipe(
    takeUntil(newRequest$)
    // finalize(() => {
    //   pendingRequestsObject[`${url}`] = undefined;
    //   // atau
    //   delete pendingRequestsObject[`${url}`];
    // })
  );
};

// request 1 next(req).pipe(takeUntil(newRequest$))
// next(req) pertama in progress/otw
// request 2, ngebuat newRequest$ yang pertama ke stop yang akhirnya request 1 next(req) pertama kestop juga
