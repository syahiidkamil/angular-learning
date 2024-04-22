import { Injectable } from '@angular/core';
import { Boss } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4201/api/bosses';

  bosses: Boss[] = []

  constructor(private http: HttpClient) {}

  getBosses(): Observable<Boss[]> {
    return this.http.get<Boss[]>(this.url)
   
  }

  getBoss(name: string): Boss {
    return this.bosses.find(boss => boss.name === name) as Boss;
  }
} 
