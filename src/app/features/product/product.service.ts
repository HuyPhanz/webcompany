import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductReqDTO, ProductResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  apiUrl = 'http://10.0.40.28:8080/api/products';

  //Post
  createProduct(data: ProductReqDTO): Observable<ProductReqDTO> {
    return this.http.post<ProductReqDTO>(this.apiUrl, data);
  }
  // Get All
  getALlProduct() {
    return this.http.get<ProductResDTO[]>(this.apiUrl);
  }
  // Get By Id
  // getProductById(id: number): Observable<typeOfProduct> {
  //   return this.http.get<typeOfProduct>(`${this.apiUrl}/${id}`)
  // }
  //Update
  updateProduct(data: ProductResDTO): Observable<ProductResDTO> {
    return this.http.put<ProductResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  //Delete
  deleteProduct(id: number): Observable<ProductReqDTO> {
    return this.http.delete<ProductReqDTO>(`${this.apiUrl}/${id}`);
  }
}
