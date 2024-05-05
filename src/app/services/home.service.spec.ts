import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { environment } from '../../environments/environment.dev';
import { Comment } from '../interfaces/comments';

describe('HomeService', () => {
  let service: HomeService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });
    service = TestBed.inject(HomeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData should return comments data and check parameters and headers', () => {
    const mockComments: Comment[] = [
      {
        id: 1,
        postId: 1,
        name: 'Test User 1',
        email: 'test1@example.com',
        body: 'Comment 1',
      },
      {
        id: 2,
        postId: 1,
        name: 'Test User 2',
        email: 'test2@example.com',
        body: 'Comment 2',
      },
    ];

    const postId = '1';
    const email = 'test1@example.com';

    service.getData(postId, email).subscribe((comments) => {
      expect(comments.length).toBe(2);
      expect(comments).toEqual(mockComments);
    });

    const req = httpController.expectOne((request) => {
      return (
        request.url === `${environment.apiUrl}/comments` &&
        request.params.get('postId') === postId &&
        request.headers.get('Content-Type') === 'application/json'
      );
    });

    expect(req.request.method).toBe('GET');
    req.flush(mockComments);
  });
});
