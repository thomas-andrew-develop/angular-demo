import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
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
  
  fetchTodo(): Observable<any>{
    const urlTodo = `${this.URL_TODO}/todos`;
    return this.httpClient.get(urlTodo, this.httOption);
  }
}
