import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { SignalService } from './signal.service';

describe('SignalService', () => {
  let service: SignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('updateCount should increment count by 10 after 10 seconds', fakeAsync(() => {
    expect(service.count()).toEqual(0);
    service.updateCount();
    tick(10000);
    expect(service.count()).toEqual(10);
    flush();
  }));
});
