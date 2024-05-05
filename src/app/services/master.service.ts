import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable()
export class ValueService {}

@Injectable()
export class ChildService {}

@Injectable()
export class ABCService {
  constructor(private childService: ChildService) {}
}

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(
    // private valueService: ValueService,
    // private abcService: ABCService,
    private httpClient: HttpClient
  ) {}
  getSum(num: number, num2: number) {
    return num + num2;
  }

  getTodos(id: number) {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}
