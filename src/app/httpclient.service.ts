import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  private url: string = 'https://dummyjson.com/todos/random';

  constructor(private http: HttpClient) { }

  getData(): Observable <any> {
    return this.http.get<JSON>(this.url).pipe(
      catchError(error => {
        console.error("data error", error);
        return error;
      })
    )
  }
}
