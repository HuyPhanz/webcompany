import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FeaturesService, FeatureServiceReqDTO, FeatureServiceResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL+'/feature-services';

  // Api-Post
  createData(data: FeatureServiceReqDTO): Observable<FeatureServiceResDTO> {
    return this.http.post<FeatureServiceResDTO>(this.apiUrl, data);
  }
  // Api Get All data
  getAllData(): Observable<FeatureServiceResDTO[]> {
    return this.http.get<FeatureServiceResDTO[]>(this.apiUrl);
  }
  //delete
  deleteData(id: number): Observable<FeatureServiceResDTO> {
    return this.http.delete<FeatureServiceResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateData(data: FeaturesService): Observable<FeatureServiceResDTO> {
    return this.http.put<FeatureServiceResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
