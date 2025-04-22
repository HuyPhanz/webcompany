import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  typeofDataCompanyHistory,
  typeOfDataCompanyMember,
  typeOfDataCompanyDetail,
  typeOfDataCompanyInfo,
  typeOfDataMediaFile
} from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  http = inject(HttpClient);
  // API
  apiUrl = 'http://10.0.40.28:8080/api/';

  //function get Api CompanyHistory
  createCompanyHistory(data: typeofDataCompanyHistory): Observable<typeofDataCompanyHistory> {
    return this.http.post<typeofDataCompanyHistory>(this.apiUrl + 'company-history', data);
  }
  //function get Api CompanyMember
  createCompanyMember(data: typeOfDataCompanyMember): Observable<typeOfDataCompanyMember> {
    return this.http.post<typeOfDataCompanyMember>(this.apiUrl + 'company-members', data);
  }
  //function get Api CompanyDetail
  createCompanyDetail(data: typeOfDataCompanyDetail): Observable<typeOfDataCompanyDetail> {
    return this.http.post<typeOfDataCompanyDetail>(this.apiUrl + 'company-details', data);
  }
  //function get Api CompanyInfo
  createCompanyInfo(data: typeOfDataCompanyInfo): Observable<typeOfDataCompanyInfo> {
    return this.http.post<typeOfDataCompanyInfo>(this.apiUrl + 'company-info', data);
  }
  //function get Api Media File
  createMediaFile(data: typeOfDataMediaFile): Observable<typeOfDataMediaFile> {
    return this.http.post<typeOfDataMediaFile>(this.apiUrl + 'media-files', data);
  }


}
