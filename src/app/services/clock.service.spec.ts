import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ClockService } from './clock.service';

describe('ClockService', () => {
  let service: ClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockService);
  });

  it('should be created', () => {
    expect(service);
  });

  it('should return an Observable that emits the current date every second', fakeAsync(() => {
    const mockDate = new Date('October 13, 2014 11:13:00');
    jasmine.clock().install();
    jasmine.clock().mockDate(mockDate);

    let emittedDate: Date;

    service.getClock().subscribe((date) => {
      emittedDate = date;
      tick(1000);
      expect(emittedDate).toEqual(new Date(2023, 5, 10, 12, 0, 1));

      tick(1000);
      expect(emittedDate).toEqual(new Date(2023, 5, 10, 12, 0, 2));
    });

    jasmine.clock().uninstall();
  }));
});
