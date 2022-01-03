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

  loginBlogs(): Observable<any>{
    return this.httpClient.get(this.API_URL+'/auth');
  }

  fetchBlogs(payload: any): Observable<any>{
    return this.httpClient.get(this.API_URL+'/blogs'+payload);
  }

  addBlogs(payload: any): Observable<any>{
    return this.httpClient.post(this.API_URL+'/blogs', payload);
  }

  deleteBlogs(id: any): Observable<any>{
    return this.httpClient.delete(this.API_URL+'/blogs/'+id, id);
  }

  updateBlogs(payload: any): Observable<any>{
    return this.httpClient.put(this.API_URL+'/blogs/'+payload.id, payload);
  }
  detailBlog(payload: any): Observable<any>{
    return this.httpClient.get(this.API_URL+'/blogs/'+payload, payload);
  }
  detailBlogBySlug(payload: any): Observable<any>{
    return this.httpClient.get(this.API_URL+'/blogs?slug='+payload, payload);
  }
  
  fetchCategories(): Observable<any>{
    return this.httpClient.get(this.API_URL+'/categories');
  }

  addCategories(payload: any): Observable<any>{
    return this.httpClient.post(this.API_URL+'/categories', payload);
  }

  deleteCategories(id: any): Observable<any>{
    return this.httpClient.delete(this.API_URL+'/categories/'+id, id);
  }

  updateCategories(payload: any): Observable<any>{
    return this.httpClient.put(this.API_URL+'/categories/'+payload.id, payload);
  }
}
