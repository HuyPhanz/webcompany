import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Support, SupportReqDTO, SupportResDTO } from '../company-support/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyManagerService {

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
