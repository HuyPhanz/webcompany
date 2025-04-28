import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerContact, CustomerContactResDTO,CustomerContactReqDTO  } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerContactService {
  http = inject(HttpClient);
  // API
  apiUrl = 'http://26.179.251.121:8080/api/customer-contacts';
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
