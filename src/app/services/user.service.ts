import { Injectable } from '@angular/core';
import { Boss } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;

  bosses: Boss[] = []

  constructor(private http: HttpClient) {}

  getBosses(): Observable<Boss[]> {
    return this.http.get<Boss[]>(this.url)
   
  }

  getBoss(name: string): Boss {
    return this.bosses.find(boss => boss.name === name) as Boss;
  }
} 
