import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { BASE_URL } from '../shared/constant/base.url';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  url = environment.apiUrl;

  private _clock: Observable<Date> = new Observable();

  constructor() { 
    setTimeout(() => {
      this._clock = interval(1000).pipe(
        map(() => new Date())
      );
    })
  }

  getClock(): Observable<Date> {
    return this._clock;
  }
}
