import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeReqDTO, EmployeeResDTO } from './interfaces';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL + '/members';

  //getAllPloyee()
  getAllEmployee():Observable<EmployeeResDTO[]> {
    return this.http.get<EmployeeResDTO[]>(this.apiUrl);
  }
  //CreatePloyee()
  createPloyee(data: EmployeeReqDTO):Observable<EmployeeResDTO> {
    return this.http.post<EmployeeResDTO>(this.apiUrl, data);
  }
  //updatePloyee()
  updatePloyee(data: EmployeeResDTO) {
    return this.http.put<EmployeeResDTO>(`${this.apiUrl + '/id'}/${data.id}`, data);
  }
  //deletePloyee()
  deletePloyee(id: number) {
    return this.http.delete<EmployeeReqDTO>(`${this.apiUrl}/${id}`);
  }
}
