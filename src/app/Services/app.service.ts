import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_URL = 'http://dev.api.calisa-app.com';
  URL_TODO = 'https://jsonplaceholder.typicode.com';
  httOption = {
    headers: new HttpHeaders({
      //'Access-Control-Allow-Origin':'*',
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      //"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      //"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization "
    })
  };



  constructor(private httpClient: HttpClient) { }


  login(payload: any): Observable<any>{
    const url = `${this.API_URL}/token`;
    return this.httpClient.post(url, payload, this.httOption);
  }
  fetchTodo(): Observable<any>{
    const urlTodo = `${this.URL_TODO}/todos`;
    return this.httpClient.get(urlTodo, this.httOption);
  }
}
