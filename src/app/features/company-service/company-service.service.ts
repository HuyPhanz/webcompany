import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Service, ServiceReqDTO, ServiceResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/company-services';

  // Api-Post
  createCompanyService(data: ServiceReqDTO): Observable<ServiceResDTO> {
    return this.http.post<ServiceResDTO>(this.apiUrl, data);
  }
  // Api Get All data
  getAllCompanyService(): Observable<ServiceResDTO[]> {
    return this.http.get<ServiceResDTO[]>(this.apiUrl);
  }
  //delete
  deleteCompanyService(id: number): Observable<ServiceResDTO> {
    return this.http.delete<ServiceResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateCompanyService(data: Service): Observable<ServiceResDTO> {
    return this.http.put<ServiceResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
