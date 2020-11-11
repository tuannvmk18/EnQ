import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  postQuestion(payload: any): Observable<unknown> {
    return this.http.post(API + 'test/question', payload);
  }

  deleteQuestion(id: string): Observable<unknown> {
    return this.http.delete(API + `test/question/${id}`);
  }

  editQuestionById(id: string, payload: any): Observable<unknown> {
    return this.http.post(API + `test/question/${id}`, payload);
  }

  getQuestionById(id: string): Observable<unknown> {
    return this.http.get(API + `test/question/${id}`);
  }

  getAllQuestion(): Observable<unknown> {
    return this.http.get(API + 'test/questions');
  }

  getLeaderByDay(): Observable<unknown> {
    return this.http.get(API + 'leaders/day');
  }

  getLeaderByWeek(): Observable<unknown> {
    return this.http.get(API + 'leader/week');
  }
}
