import { HttpInterceptorFn } from '@angular/common/http';
import { BYPASS_LOGGING } from '../shared/constant/context.constants';

export const conditionalInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(BYPASS_LOGGING)) {
    return next(req);
  } else {
    // ngelakuin something atau dicegat
    console.log('conditionalInterceptor: BYPASS_LOGGING context is false');

    return next(req);
  }
};
