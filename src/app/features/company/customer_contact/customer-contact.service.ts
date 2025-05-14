import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerContact, CustomerContactResDTO,CustomerContactReqDTO  } from './interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerContactService {
  http = inject(HttpClient);
  // API
  apiUrl = environment.API_URL + '/customer-contacts';
  // create API
  createCustomerContact(data: CustomerContactReqDTO): Observable<CustomerContactResDTO> {
    return this.http.post<CustomerContactResDTO>(this.apiUrl, data);
  }
  // get API
  getAlLDataCustomerContact():Observable<CustomerContactResDTO[]> {
    return this.http.get<CustomerContactResDTO[]>(this.apiUrl);
  }
  //update
  updateCustomerContact(data:CustomerContact): Observable<CustomerContactResDTO> {
    return this.http.put<CustomerContactResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  //delete
  deleteCustomerContact(id: number): Observable<CustomerContactResDTO> {
    return this.http.delete<CustomerContactResDTO>(`${this.apiUrl}/${id}`);
  }
}
