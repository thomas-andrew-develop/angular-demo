import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  API_URL = environment.API_URL;
  constructor(private httpClient: HttpClient) { }

  fetchBlogs(): Observable<any>{
    return this.httpClient.get(this.API_URL+'/blogs');
  }
  
  fetchCategories(): Observable<any>{
    return this.httpClient.get(this.API_URL+'/categories');
  }
}
