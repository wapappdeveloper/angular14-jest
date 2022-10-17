import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    const url = './assets/data/data.json';
    return this.httpClient.get(url);
  }

  getDataV1(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      tap((data: any) => console.log(data, 'data fetched')),
      catchError(this.handleError('failed'))
    );
  }

  handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<any> => {
      throw new Error('test error 404')
    }
  }

  calculateSomething(a: any, b: any) {
    if (a > 0) {
      return a * b;
    } else {
      return a + b;
    }
  }



}
