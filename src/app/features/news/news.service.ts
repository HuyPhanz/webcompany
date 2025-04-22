import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsReqDTO, NewsResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  http = inject(HttpClient);
  apiUrl = 'http://10.0.40.28:8080/api/news';

  // Api-Post
  createNew(data: NewsReqDTO): Observable<NewsReqDTO> {
    return this.http.post<NewsReqDTO>(this.apiUrl, data);
  }
  // Api-Get ( Read )
  // getNewById(id:number): Observable<typeOfNews> {
  //   return this.http.get<typeOfNews>(`${this.apiUrl}/${id}`)
  // }
  // Api Get All data
  getAllNews(): Observable<NewsResDTO[]> {
    return this.http.get<NewsResDTO[]>(this.apiUrl);
  }
  //delete
  deleteNew(id: number): Observable<NewsReqDTO> {
    return this.http.delete<NewsReqDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateNew(id: NewsResDTO): Observable<NewsResDTO> {
    return this.http.delete<NewsResDTO>(`${this.apiUrl}/${id}`);
  }
}
