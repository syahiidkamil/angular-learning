import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('MasterService', () => {
  let service: MasterService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   providers: [HttpClient, HttpHandler],
    // });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MasterService(httpClientSpy);

    // manual
    // service2 = new MasterService(
    //   new ValueService(),
    //   new ABCService(new ChildService()),
    //   new HttpClient()
    // );
  });

  it('should getTodos with id param 1', (done) => {
    const expectedTodo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };

    httpClientSpy.get
      .withArgs(`https://jsonplaceholder.typicode.com/todos/1`)
      .and.returnValue(of(expectedTodo));

    service.getTodos(1).subscribe((data) => {
      expect(data).toEqual(expectedTodo);
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be equal 2', () => {
    expect(service.getSum(1, 1)).toEqual(2);
  });

  it('should 3+2 be equal 5', () => {
    expect(service.getSum(3, 2)).toEqual(5);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
