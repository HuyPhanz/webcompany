import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeReqDTO, EmployeeResDTO } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  http = inject(HttpClient);
  apiUrl = 'http://10.0.40.28:8080/api/employees';

  //getAllPloyee()
  getAllPloyee() {
    return this.http.get<EmployeeResDTO[]>(this.apiUrl);
  }
  //CreatePloyee()
  createPloyee(data: EmployeeReqDTO) {
    return this.http.post<EmployeeReqDTO>(this.apiUrl, data);
  }
  //updatePloyee()
  updatePloyee(data: EmployeeResDTO) {
    return this.http.put<EmployeeResDTO>(`${this.apiUrl+'/id'}/${data.id}`, data);
  }
  //deletePloyee()
  deletePloyee(id: number) {
    return this.http.delete<EmployeeReqDTO>(`${this.apiUrl}/${id}`);
  }
}
