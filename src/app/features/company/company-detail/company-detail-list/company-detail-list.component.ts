import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CompanyDetailReqDTO, CompanyDetailResDTO } from '../interface';
import { CompanyDetailService } from '../company-detail.service';

@Component({
  selector: 'app-company-detail-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './company-detail-list.component.html',
  styleUrl: './company-detail-list.component.scss'
})
export class CompanyDetailListComponent implements OnInit {
  //service
  companyDetail = inject(CompanyDetailService);
  editCache: Record<string, { edit: boolean; data: CompanyDetailReqDTO }> = {};
  companyDetailOfData: CompanyDetailResDTO[] = [];

  ngOnInit() {
    this.getAllDataCompanyDetail();
  }
  //get APi
  getAllDataCompanyDetail() {
    this.companyDetail.getAlLDataCompanyDetail().subscribe((res) => {
      this.companyDetailOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteCompanyDetail(id: number) {
    this.companyDetail.deleteCompanyDetail(id).subscribe(() => {
      this.getAllDataCompanyDetail();
    });
  }
  //update
  updateCompanyDetail(id: number): void {
    const index = this.companyDetailOfData.findIndex((item) => item.id === id);
    const updateCompanyDetail = {
      id: this.companyDetailOfData[index].id,
      ...this.editCache[id].data
    };

    this.companyDetail.updateCompanyDetail(updateCompanyDetail).subscribe(() => {
      this.getAllDataCompanyDetail();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.companyDetailOfData.forEach((item) => {
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
    const index = this.companyDetailOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.companyDetailOfData[index] },
      edit: false
    };
  }
}
