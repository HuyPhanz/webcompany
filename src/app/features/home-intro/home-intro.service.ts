import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { DataReqDTO, DataResDTO } from './interface';

@Injectable({
  providedIn: 'root'
})
export class HomeIntroService {

  http = inject(HttpClient);
  apiUrl = environment.API_URL + '/home-intro';

  //getAllPloyee()
  getAllData():Observable<DataResDTO[]> {
    return this.http.get<DataResDTO[]>(this.apiUrl);
  }
  //CreatePloyee()
  createData(data: DataReqDTO):Observable<DataResDTO> {
    return this.http.post<DataResDTO>(this.apiUrl, data);
  }
  //updatePloyee()
  updateData(data: DataResDTO) {
    return this.http.put<DataResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  //deletePloyee()
  deleteData(id: number):Observable<DataResDTO> {
    return this.http.delete<DataResDTO>(`${this.apiUrl}/${id}`);
  }
}
