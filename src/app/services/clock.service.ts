import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

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
