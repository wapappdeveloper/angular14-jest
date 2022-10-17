import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('./assets/data/data.json')
  }

  getDataV1(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      tap((data: any) => console.log(data, 'fetched')),
      catchError(this.handleError('failed'))
    );
  }

  postData(url: string, data: any): Observable<any> {
    return this.httpClient.post(url, data).pipe(
      tap((data: any) => console.log(data, 'fetched')),
      catchError(this.handleError('failed'))
    );
  }

  handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<any> => {
      throw new Error('test error 404');
    }
  }
}
