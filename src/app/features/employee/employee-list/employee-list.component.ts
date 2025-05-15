import { Component, inject, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Employee, EmployeeReqDTO } from '../interfaces';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    CommonModule,
    FormsModule,
    NzInputModule,
    NzPopconfirmModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  //service
  router = inject(Router);
  route = inject(ActivatedRoute);
  // message
  message = inject(NzMessageService)
  //edit
  editCache: Record<string, { edit: boolean; data: EmployeeReqDTO }> = {};
  //list
  listOfData: Employee[] = [];
  //service
  employeeService = inject(EmployeeService);
  //get API
  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe({
      next: (data) => {
        this.listOfData = data;
        this.updateEditCache();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  //delete API
  deleteProduct(id: number): void {
    this.employeeService.deletePloyee(id).subscribe(() => {
      this.getAllEmployee();
      this.message.success('Xóa thành công!');
    });
  }
  //start edit
  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }
  //cancel edit
  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }
  //update edit
  updateEditCache(): void {
    this.listOfData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  //update Employee
  updateEmployee(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    const updatedEmployee = {
      id: this.listOfData[index].id,
      ...this.editCache[id].data
    };

    this.employeeService.updatePloyee(updatedEmployee).subscribe(() => {
      this.getAllEmployee();
      this.editCache[id].edit = false;
      this.message.success('Cập nhật thành công!');
    });
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
  ngOnInit() {
    this.getAllEmployee();
  }
}
