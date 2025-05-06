import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyDetail, CompanyDetailReqDTO, CompanyDetailResDTO } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {
  http = inject(HttpClient);
  // API
  apiUrl = 'http://26.179.251.121:8080/api/company-details';
  // create API
  createCompanyDetail(data: CompanyDetailReqDTO): Observable<CompanyDetailReqDTO> {
    return this.http.post<CompanyDetailReqDTO>(this.apiUrl, data);
  }
  // get API
  getAlLDataCompanyDetail():Observable<CompanyDetailResDTO[]> {
    return this.http.get<CompanyDetailResDTO[]>(this.apiUrl);
  }
  //
  updateCompanyDetail(data:CompanyDetail): Observable<CompanyDetailResDTO> {
    return this.http.put<CompanyDetailResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  deleteCompanyDetail(id: number): Observable<CompanyDetailResDTO> {
    return this.http.delete<CompanyDetailResDTO>(`${this.apiUrl}/${id}`);
  }
}
