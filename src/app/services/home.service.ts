import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable, of } from 'rxjs';
import { Comment } from '../interfaces/comments';
import { BASE_URL } from '../shared/constant/base.url';
import { environment } from '../../environments/environment.dev';
import { BYPASS_LOGGING } from '../shared/constant/context.constants';

const JWT_TOKEN_DUMMY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFuZ3VsYXIiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjUxNjIzOTAyMn0.SLoP03tbQ_14HuxjyB8cMQBbAWkd9cT6qu1GyJx221g';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = environment.apiUrl + '/comments';
  accessToken = `Bearer ${JWT_TOKEN_DUMMY}`; // alternatif dari local storage
  // baseParams = new HttpParams()
  //   .set('postId', '2')
  //   .set('email', 'Mallory_Kunze@marie.org');

  constructor(private http: HttpClient) {}

  getAuthToken() {
    return this.accessToken;
  }

  getRefreshedAuthToken(): Observable<string> {
    return of(`Bearer new_${JWT_TOKEN_DUMMY}`);
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  getData(postId: string, email: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
      // observe: 'response' as 'response',
      params: {
        postId: postId,
        // 'email' : email
      },
      // BYPASS_LOGGING
      context: new HttpContext().set(BYPASS_LOGGING, true),
    });

    // .pipe(
    //   // Do Filter with rxjs
    //   map((data) => {
    //     return data.filter((item) => item.postId === +postId && item.email === email);
    //   });
  }
}
