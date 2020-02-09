import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Article[]>('/api/articles.json');
  }
}
