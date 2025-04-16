import { EmployeeService } from './../employee.service';
import { Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Employee } from '../interfaces';
@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NzTableModule, NzButtonModule, NzModalModule, NzIconModule, CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  listOfData: Employee[] = [];
  employeeService = inject(EmployeeService);

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe({
      next: (res: Employee[]) => {
        this.listOfData = res;
      },
      error: (err) => {
        console.error('Lỗi lấy nhân viên:', err);
      }
    });
  }
}
