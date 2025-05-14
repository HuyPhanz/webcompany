import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AboutIntro, AboutIntroResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class AboutIntroService {

  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/about-us';

  // Api Get All data
  getAllData(): Observable<AboutIntroResDTO[]> {
    return this.http.get<AboutIntroResDTO[]>(this.apiUrl);
  }
  //delete
  deleteData(id: number): Observable<AboutIntroResDTO> {
    return this.http.delete<AboutIntroResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateData(data: AboutIntro): Observable<AboutIntroResDTO> {
    return this.http.put<AboutIntroResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
