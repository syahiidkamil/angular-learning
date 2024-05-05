import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush,
} from '@angular/core/testing';
import { TimeComponent } from './time.component';
import { of } from 'rxjs';
import { MasterService } from '../../services/master.service';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;
  let mockMasterService: jasmine.SpyObj<MasterService>;

  beforeEach(async () => {
    mockMasterService = jasmine.createSpyObj('UserService', ['getTodos']);
    mockMasterService.getTodos.and.returnValue(
      of([{ id: 2, title: 'Mock Todo' }])
    );

    await TestBed.configureTestingModule({
      imports: [TimeComponent],
      providers: [{ provide: MasterService, useValue: mockMasterService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should update date every second', fakeAsync(() => {
    spyOn(component.dateChange, 'emit');
    fixture.detectChanges();

    tick(1000);
    expect(component.dateChange.emit).toHaveBeenCalledTimes(1);
    expect(component.date).toBeTruthy();

    tick(1000);
    expect(component.dateChange.emit).toHaveBeenCalledTimes(2);

    flush();
    component.ngOnDestroy();
  }));

  afterEach(() => {
    fixture.destroy();
  });
});
