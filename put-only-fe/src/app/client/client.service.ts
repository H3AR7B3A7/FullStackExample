import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, delay, throwError } from 'rxjs'

import { Client } from './client'

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly baseUrl = 'http://localhost:8080/client'
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(
      delay(3000),
      catchError((err) => this.handleError(err))
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.statusText}`
    }
    console.log(
      '%c' + errorMessage,
      'font-family: sans-serif; font-weight: bold; font-size: 18px; color: red'
    )
    return throwError(() => errorMessage)
  }
}
