import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner, BannerResDTO,BannerReqDTO  } from './interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  http = inject(HttpClient);
  // API
  apiUrl = environment.API_URL+'/banners';

  // create API
  createBanner(data:BannerReqDTO): Observable<BannerReqDTO> {
    return this.http.post<BannerReqDTO>(this.apiUrl, data);
  }
  // get API
  getAlLDataBanner(): Observable<BannerResDTO[]> {
    return this.http.get<BannerResDTO[]>(this.apiUrl);
  }
  //
  updateBanner(data: Banner): Observable<BannerResDTO> {
    return this.http.put<BannerResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
  deleteBanner(id: number): Observable<BannerResDTO> {
    return this.http.delete<BannerResDTO>(`${this.apiUrl}/${id}`);
  }
}
