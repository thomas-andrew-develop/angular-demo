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
    
    return this.httpClient.get(this.API_URL_USER+'/users');
  }

  addUser(payload: any): Observable<any>{
    return this.httpClient.post(this.API_URL_USER+'/users', payload);
  }

  deletedUser(id: any): Observable<any>{
    return this.httpClient.delete(this.API_URL_USER+'/users/'+id, id);
  }

  updateUser(payload: any): Observable<any>{
    return this.httpClient.put(this.API_URL_USER+'/users/'+payload.id, payload);
  }
}
