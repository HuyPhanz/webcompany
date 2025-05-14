import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Support, SupportReqDTO, SupportResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class CompanySupportService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/company-supports';

  // Api-Post
  createCompanySupport(data: SupportReqDTO): Observable<SupportResDTO> {
    return this.http.post<SupportResDTO>(this.apiUrl, data);
  }
  // Api Get All data
  getAllCompanySupport(): Observable<SupportResDTO[]> {
    return this.http.get<SupportResDTO[]>(this.apiUrl);
  }
  //delete
  deleteCompanySupport(id: number): Observable<SupportResDTO> {
    return this.http.delete<SupportResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateCompanySupport(data: Support): Observable<SupportResDTO> {
    return this.http.put<SupportResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
