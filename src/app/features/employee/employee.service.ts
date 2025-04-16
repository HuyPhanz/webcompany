import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from './interfaces';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  http = inject(HttpClient);
  apiUrl = 'https://freeapi.miniprojectideas.com/api/EmployeeApp/';
  url = 'http://localhost:3000/employees';
  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<{ data: Employee[] }>(this.apiUrl + 'GetAllEmployee').pipe(map((res) => res.data));
    //Service have to .pipe(map()) nếu response bị bọc in object.
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee).pipe(delay(1000));
  }
}
