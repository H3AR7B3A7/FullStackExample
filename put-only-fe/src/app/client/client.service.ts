import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Client } from './client'

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly baseUrl = 'http://localhost:8080/client'
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
  }
}
