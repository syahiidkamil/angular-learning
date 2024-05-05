import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('UserService', ['getBosses']);
    mockUserService.getBosses.and.returnValue(
      of([
        {
          name: 'Boss1',
          imageUrl: 'http://example.com/boss1.png',
          imgSize: 150,
          wealth: 1000000,
          age: 45,
        },
        {
          name: 'Boss2',
          imageUrl: 'http://example.com/boss2.png',
          imgSize: 160,
          wealth: 1200000,
          age: 50,
        },
      ])
    );

    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.bosses.length).toBe(2);
  });

  it('should disable the button on click No', () => {
    expect(component.buttonDisabled).toBeFalse();
    component.onClickNo();
    expect(component.buttonDisabled).toBeTrue();
  });

  it('should handle changes to imageUrl when ngOnChanges is triggered', () => {
    const newImageUrl = 'http://example.com/new-image.png';
    component.imageUrl = newImageUrl;

    component.bosses = component.bosses.concat(
      new Array(4).fill(component.bosses[0])
    );

    component.ngOnChanges();
    expect(component.bosses[4]).toBeDefined();
    expect(component.bosses[4].imageUrl).toEqual(newImageUrl);
  });

  it('should emit a notification when sendNotify is called', () => {
    spyOn(component.onNotify, 'emit');
    component.sendNotify();
    expect(component.onNotify.emit).toHaveBeenCalledWith('Spontan Uhuyyy!');
  });

  it('should update image size on click Yes', () => {
    component.onClickYes();
    expect(component.bosses[0].imgSize).toBe(200);
  });
});
