import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'demo1';

  data$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.data$ = this.http.get('/api/articles.json').pipe(share());
  }
}
