import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('./assets/data/data.json');
  }

  getDataV1(): Observable<any> {
    return this.httpClient.get('./assets/data/data.json').pipe(
      tap((data: any) => { console.log(data, 'data fetched') }),
      catchError(this.handleError('Failed to fetch data'))
    );
  }

  handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<any> => {
      throw new Error(`${error.status} + ${error.error}`);
    }
  }
}
