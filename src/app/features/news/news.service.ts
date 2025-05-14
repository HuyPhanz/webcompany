import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsReqDTO, NewsResDTO,News } from './interface';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/news';

  // Api-Post
  createNew(data: NewsReqDTO): Observable<NewsResDTO> {
    return this.http.post<NewsResDTO>(this.apiUrl, data);
  }
  // Api-Get ( Read )
  getNewsById(id: number): Observable<NewsResDTO> {
    return this.http.get<NewsResDTO>(`${this.apiUrl}/${id}`);
  }
  // Api Get All data
  getAllNews(): Observable<NewsResDTO[]> {
    return this.http.get<NewsResDTO[]>(this.apiUrl);
  }
  //delete
  deleteNew(id: number): Observable<NewsResDTO> {
    return this.http.delete<NewsResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateNew(data: News): Observable<NewsResDTO> {
    return this.http.put<NewsResDTO>(`${this.apiUrl}/${data.id}`, data);
  }

}
