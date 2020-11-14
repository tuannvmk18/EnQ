import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByID(id: string) {
    return this.http.get(API + `users/${id}`);
  }

  getAllUser() {
    return this.http.get(API + 'users');
  }
}
