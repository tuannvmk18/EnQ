import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { reqQuestion } from '../Interfaces/reqQuestion';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  postQuestion(payload: reqQuestion): Observable<unknown> {
    return this.http.post(API + 'test/question', payload);
  }

  deleteQuestion(id: string): Observable<unknown> {
    return this.http.delete(API + `test/question/${id}`);
  }

  editQuestionById(id: string, payload: reqQuestion): Observable<unknown> {
    return this.http.post(API + `test/question/${id}`, payload);
  }

  getQuestionById(id): Observable<unknown> {
    return this.http.get(API + `test/question/${id}`);
  }
}
