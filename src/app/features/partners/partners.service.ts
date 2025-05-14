import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Partners, PartnersReqDTO, PartnersResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/company-partners';

  // Api-Post
  createData(data: PartnersReqDTO): Observable<PartnersResDTO> {
    return this.http.post<PartnersResDTO>(this.apiUrl, data);
  }
  // Api Get All data
  getAllData(): Observable<PartnersResDTO[]> {
    return this.http.get<PartnersResDTO[]>(this.apiUrl);
  }
  //delete
  deleteData(id: number): Observable<PartnersResDTO> {
    return this.http.delete<PartnersResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateData(data: Partners): Observable<PartnersResDTO> {
    return this.http.put<PartnersResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
