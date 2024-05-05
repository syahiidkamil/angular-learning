import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Boss } from '../interfaces/user';

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve bosses from the API via GET', () => {
    const testBosses: Boss[] = [
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
        imgSize: 200,
        wealth: 2000000,
        age: 50,
      },
    ];

    service.getBosses().subscribe((bosses) => {
      expect(bosses.length).toBe(2);
      expect(bosses).toEqual(testBosses);
    });

    const req = httpController.expectOne(service.url);
    expect(req.request.method).toBe('GET');
    req.flush(testBosses);
  });

  it('should find a boss by name', () => {
    service.bosses = [
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
        imgSize: 200,
        wealth: 2000000,
        age: 50,
      },
    ];

    const boss = service.getBoss('Boss1');
    expect(boss).toBeTruthy();
    expect(boss.name).toBe('Boss1');
    expect(boss.wealth).toBe(1000000);
  });

  it('should return undefined when boss not found', () => {
    service.bosses = [
      {
        name: 'Boss1',
        imageUrl: 'http://example.com/boss1.png',
        imgSize: 150,
        wealth: 1000000,
        age: 45,
      },
    ];

    const boss = service.getBoss('Boss3');
    expect(boss).toBeUndefined();
  });
});
