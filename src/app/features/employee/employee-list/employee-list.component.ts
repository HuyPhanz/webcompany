
import { Component, inject,  OnInit } from '@angular/core';
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
@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NzTableModule, NzButtonModule, NzModalModule, NzIconModule, CommonModule,FormsModule,NzInputModule, NzPopconfirmModule ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  //edit
  editCache: Record<string, { edit: boolean; data: EmployeeReqDTO }> = {};
  //list
  listOfData: Employee[] = [];
  //service
  employeeService = inject(EmployeeService);
  //getAPI
  getAllEmployee() {
  this.employeeService.getAllPloyee().subscribe({
    next: data => {
      this.listOfData = data;
      this.updateEditCache();
    }, error: err => {
      console.log(err);
    }
  })
  }
  //delete
  deleteProduct(id: number): void {
    this.employeeService.deletePloyee(id).subscribe(() => {
      this.getAllEmployee();
    });
  }
  ngOnInit() {
    this.getAllEmployee();
  }
  //start
  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }
  //cancel
  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }
  //updateedit
  updateEditCache(): void {
    this.listOfData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  //update Employee
  updatePloyee(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    const updatedPloyee = {
      id: this.listOfData[index].id,
      ...this.editCache[id].data
    };

    this.employeeService.updatePloyee(updatedPloyee).subscribe(() => {
      this.getAllEmployee();
      this.editCache[id].edit = false;
    });

  }
}
