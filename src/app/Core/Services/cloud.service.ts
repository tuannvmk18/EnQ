import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { API } from 'src/environments/environment';
import { reqQuestion } from '../Interfaces/reqQuestion';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  postQuestion(payload: reqQuestion): Observable<unknown> {
    return this.http.post(API + 'test/question', payload).pipe(take(1));
  }

  deleteQuestion(id: string): Observable<unknown> {
    return this.http.delete(API + `test/question/${id}`).pipe(take(1));
  }

  editQuestionById(id: string, payload: any): Observable<unknown> {
    return this.http.post(API + `test/question/${id}`, payload).pipe(take(1));
  }

  getQuestionById(id: string): Observable<unknown> {
    return this.http.get(API + `test/question/${id}`).pipe(take(1));
  }

  getQuestionByRank(rank): Observable<unknown> {
    return this.http.get(API + `test/test-exam-rank?rank=${rank}`).pipe(take(1));
  }

  getQuestionByType(type): Observable<unknown> {
    return this.http.get(API + `test/test-exam-type?type=${type}`).pipe(take(1));
  }

  getLeaderByDay(): Observable<unknown> {
    return this.http.get(API + 'leaders/day').pipe(take(1));
  }

  getLeaderByWeek(): Observable<unknown> {
    return this.http.get(API + 'leader/week').pipe(take(1));
  }
}
