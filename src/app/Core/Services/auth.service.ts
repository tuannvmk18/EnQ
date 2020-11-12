import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { catchError, concatAll, map, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;
  private token: string = null;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getUserFromLocalStorage();
    this.getTokenFromLocalStorage();
  }

  public signOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  private getUserFromLocalStorage(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  private getTokenFromLocalStorage(): void {
    this.token = localStorage.getItem('token');
  }

  public login(userName: string, password: string): Observable<unknown> {
    const $outer = this.httpClient
      .post(API + 'users/admin/login', {
        userName,
        password,
      })
      .pipe(
        take(1),
        tap((res: any) => {
          if (!res.data.token) {
            throw new Error('Failed to login');
          }
          this.token = res.data.token;
          localStorage.setItem('token', res.data.token);
        })
      );

    const $combined = $outer.pipe(
      map((res: any) => this.getAdminUserInfo(res.data.token)),
      concatAll()
    );

    return $combined;
  }

  private getAdminUserInfo(token: string): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({
        token,
      }),
    };
    return this.httpClient
      .post(API + 'users/admin/logedin', {}, httpOptions)
      .pipe(
        take(1),
        tap((payload: any) => {
          if (!payload) {
            throw new Error('Failed to get user');
          }
          this.user = payload.data;
          localStorage.setItem('user', JSON.stringify(payload.data));
        })
      );
  }

  get getUser(): any {
    return this.user;
  }

  get getToken(): string {
    return this.token;
  }
}
