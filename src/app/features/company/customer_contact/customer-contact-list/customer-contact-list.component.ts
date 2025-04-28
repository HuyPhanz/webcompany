import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {  CustomerContactReqDTO,  CustomerContactResDTO } from '../interface';
import { CustomerContactService } from '../customer-contact.service';

@Component({
  selector: 'app-customer-contact-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './customer-contact-list.component.html',
  styleUrl: './customer-contact-list.component.scss'
})
export class CustomerContactListComponent implements OnInit {
  //service
  customerContactService = inject(CustomerContactService);
  editCache: Record<string, { edit: boolean; data: CustomerContactReqDTO }> = {};
  customerContactOfData: CustomerContactResDTO[] = [];

  ngOnInit() {
    this.getAllDataCustomerContact();
  }
  //get APi
  getAllDataCustomerContact() {
    this.customerContactService.getAlLDataCustomerContact().subscribe((res) => {
      this.customerContactOfData = res;
      this.updateEditCache();
    })
  }
  //delete
  deleteDataCustomerContact(id: number) {
    this.customerContactService.deleteCustomerContact(id).subscribe(() => {
      this.getAllDataCustomerContact();
    });
  }
  //update
  updateCustomerContact(id: number): void {
    const index = this.customerContactOfData.findIndex((item) => item.id === id);
    const updateCustomerContact = {
      id: this.customerContactOfData[index].id,
      ...this.editCache[id].data
    };

    this.customerContactService.updateCustomerContact(updateCustomerContact).subscribe(() => {
      this.getAllDataCustomerContact();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.customerContactOfData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  //start edit
  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: number): void {
    const index = this.customerContactOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.customerContactOfData[index] },
      edit: false
    };
  }
}
