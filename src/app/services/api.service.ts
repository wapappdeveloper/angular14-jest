import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }
  
  getData(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  getLocalJson(): Observable<any> {
    const url = './assets/data/data.json';
    return this.getData(url);
  }

  getLocalJsonV1(): Observable<any> {
    const url = './assets/data/data.json';
    return this.getData(url).pipe(
      tap((data: any) => { console.log(data, 'fetched') }),
      catchError(this.handleError('Failed to fetch data'))
    );
  }

  handleError(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<any> => {
      console.error(error);
      const message = `server returned code ${error.status} with body ${error.error}`
      throw new Error(`${operation} failed: ${message}`);
    }
  }
}