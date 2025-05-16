import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerReqDTO, ManagerResDTO } from '../interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CompanyManagerService } from '../company-manager.service';
@Component({
  selector: 'app-company-manager-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './company-manager-list.component.html',
  styleUrl: './company-manager-list.component.scss'
})
export class CompanyManagerListComponent implements OnInit {
  // message
  message = inject(NzMessageService);
  //service
  companyManagerService = inject(CompanyManagerService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: ManagerReqDTO }> = {};
  companyExperienceOfData: ManagerResDTO[] = [];

  ngOnInit() {
    this.getAllCompanyExperience();
  }
  //get APi
  getAllCompanyExperience() {
    this.companyManagerService.getAllData().subscribe((res) => {
      this.companyExperienceOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteExperienceService(id: number) {
    this.companyManagerService.deleteData(id).subscribe(() => {
      this.getAllCompanyExperience();
      this.message.success('Xóa thành công!');
    });
  }
  //update
  updateCompanyExperience(id: number): void {
    const index = this.companyExperienceOfData.findIndex((item) => item.id === id);
    const updateExperience = {
      id: this.companyExperienceOfData[index].id,
      ...this.editCache[id].data
    };

    this.companyManagerService.updateData(updateExperience).subscribe(() => {
      this.getAllCompanyExperience();
    });
    this.message.success('Cập nhật thành công!');
  }
  //
  updateEditCache(): void {
    this.companyExperienceOfData.forEach((item) => {
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
    const index = this.companyExperienceOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.companyExperienceOfData[index] },
      edit: false
    };
  }
}
