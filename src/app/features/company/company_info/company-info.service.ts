import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CompanyInfo,
  CompanyInfoResDTO,
  CompanyInfoReqDTO,
  CompanyDetailReqDTO,
  CompanyDetailResDTO,
  CompanyDetail
} from './interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {
  http = inject(HttpClient);
  // API
  apiUrl = 'http://26.179.251.121:8080/api/company-info';
  // create API
  createCompanyInfo(data: CompanyInfoReqDTO): Observable<CompanyInfoReqDTO> {
    return this.http.post<CompanyInfoReqDTO>(this.apiUrl, data);
  }
  // get API
  getAlLDataCompanyInfo(): Observable<CompanyInfoResDTO[]> {
    return this.http.get<CompanyInfoResDTO[]>(this.apiUrl);
  }
  //update API
  updateCompanyInfo(data: CompanyInfo): Observable<CompanyInfoResDTO> {
    return this.http.put<CompanyInfoResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  //Delete API
  deleteCompanyInfo(id: number): Observable<CompanyInfoResDTO> {
    return this.http.delete<CompanyInfoResDTO>(`${this.apiUrl}/${id}`);
  }

  createCompanyDetail(data: CompanyDetailReqDTO): Observable<CompanyDetailReqDTO> {
    return this.http.post<CompanyDetailReqDTO>(this.apiUrl, data);
  }
  // get API
  getAlLDataCompanyDetail(): Observable<CompanyDetailResDTO[]> {
    return this.http.get<CompanyDetailResDTO[]>(this.apiUrl);
  }
  //
  updateCompanyDetail(data: CompanyDetail): Observable<CompanyDetailResDTO> {
    return this.http.put<CompanyDetailResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  deleteCompanyDetail(id: number): Observable<CompanyDetailResDTO> {
    return this.http.delete<CompanyDetailResDTO>(`${this.apiUrl}/${id}`);
  }
}
