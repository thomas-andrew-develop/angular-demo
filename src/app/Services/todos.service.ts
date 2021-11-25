import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  API_URL_USER = 'https://5eb92308bb17460016b32fc2.mockapi.io/api';
  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<any>{
    const urlUser = `${this.API_URL_USER}/users`;
    return this.httpClient.get(urlUser);
  }

  addUser(payload: any): Observable<any>{
    const apiAddUser = `${this.API_URL_USER}/users`;
    return this.httpClient.post(apiAddUser, payload);
  }
}
