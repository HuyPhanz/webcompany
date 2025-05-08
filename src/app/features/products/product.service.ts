import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductReqDTO, ProductResDTO } from './interface';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL + '/products';

  // Api-Post
  createProduct(data: ProductReqDTO): Observable<ProductResDTO> {
    return this.http.post<ProductResDTO>(this.apiUrl, data);
  }
  // Api-Get ( Read )
  // getProductById(id:number): Observable<ProductResDTO> {
  //   return this.http.get<ProductResDTO>(`${this.apiUrl}/${id}`)
  // }
  // Api Get All data
  getAllProducts(): Observable<ProductResDTO[]> {
    return this.http.get<ProductResDTO[]>(this.apiUrl);
  }
  //delete
  deleteProduct(id: number): Observable<ProductResDTO> {
    return this.http.delete<ProductResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateProduct(data: Product): Observable<ProductReqDTO> {
    return this.http.put<ProductReqDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}
