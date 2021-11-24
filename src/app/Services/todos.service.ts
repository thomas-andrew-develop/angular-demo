import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  API_URL_USER = 'https://reqres.in/api';
  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<any>{
    const urlUser = `${this.API_URL_USER}/users`;
    return this.httpClient.get(urlUser);
  }
}
