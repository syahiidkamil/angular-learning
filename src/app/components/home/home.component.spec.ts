import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService } from '../../services/home.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockHomeService: jasmine.SpyObj<HomeService>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockActivatedRoute = {
      paramMap: of(new Map([['id', '3']])),
    };

    mockHomeService = jasmine.createSpyObj('HomeService', ['getData']);
    mockHomeService.getData.and.returnValue(
      of([
        {
          postId: 3,
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          body: 'Hello world',
        },
      ])
    );

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HomeService, useValue: mockHomeService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.listComments.length).toBeGreaterThan(0);
  });

  it('should retrieve comments on initialization', () => {
    expect(mockHomeService.getData).toHaveBeenCalled();
    expect(component.listComments[0].name).toEqual('John Doe');
  });
});
