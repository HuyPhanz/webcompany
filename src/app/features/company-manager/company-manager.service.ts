import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Manager, ManagerReqDTO, ManagerResDTO } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyManagerService {

  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/company-managers';
  // Api-Post
  createData(data: ManagerReqDTO): Observable<ManagerResDTO> {
    return this.http.post<ManagerResDTO>(this.apiUrl, data);
  }
  // Api Get All data
  getAllData(): Observable<ManagerResDTO[]> {
    return this.http.get<ManagerResDTO[]>(this.apiUrl);
  }
  //delete
  deleteData(id: number): Observable<ManagerResDTO> {
    return this.http.delete<ManagerResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateData(data: Manager): Observable<ManagerResDTO> {
    return this.http.put<ManagerResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
