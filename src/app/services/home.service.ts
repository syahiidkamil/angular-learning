import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = 'https://jsonplaceholder.typicode.com/comments';
  // baseParams = new HttpParams()
  //   .set('postId', '2')
  //   .set('email', 'Mallory_Kunze@marie.org');

  constructor(private http: HttpClient) { 
  }

  getData(postId: string, email: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
      // observe: 'response' as 'response',
      params: {
        'postId' : postId,
        // 'email' : email
      }
    });
    
    // .pipe(
    //   // Do Filter with rxjs
    //   map((data) => {
    //     return data.filter((item) => item.postId === +postId && item.email === email);
    //   });
  }
}
