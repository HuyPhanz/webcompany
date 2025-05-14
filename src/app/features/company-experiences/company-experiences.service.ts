import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Experience, ExperienceResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class CompanyExperiencesService {

  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/company-experiences';

  // Api Get All data
  getAllData(): Observable<ExperienceResDTO[]> {
    return this.http.get<ExperienceResDTO[]>(this.apiUrl);
  }
  //delete
  deleteData(id: number): Observable<ExperienceResDTO> {
    return this.http.delete<ExperienceResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateData(data: Experience): Observable<ExperienceResDTO> {
    return this.http.put<ExperienceResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
