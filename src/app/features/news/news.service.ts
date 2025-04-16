import { Injectable , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { typeOfNews } from './interface';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  http = inject(HttpClient);
  apiUrl = 'http://10.0.40.28:8080/api/news';

  // Api-Post
  createNew(data:typeOfNews): Observable<typeOfNews> {
    return this.http.post<typeOfNews>(this.apiUrl, data)
  }
  // Api-Get ( Read )
  // getNewById(id:number): Observable<typeOfNews> {
  //   return this.http.get<typeOfNews>(`${this.apiUrl}/${id}`)
  // }
  // Api Get All data
  getAllNews(): Observable<typeOfNews[]> {
    return this.http.get<typeOfNews[]>(this.apiUrl)
  }
  // Update News
  // updateNew(data:typeOfNews): Observable<typeOfNews> {
  //   return this.http.put<typeOfNews>(`${this.apiUrl}/${data.slug}`, data)
  // }
  //Delete Item
  // deleteItemNew(id:number):Observable<typeOfNews>  {
  //   return this.http.delete<typeOfNews>(`${this.apiUrl}/${id}`)
  // }

}
