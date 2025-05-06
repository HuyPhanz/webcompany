import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CompanyInfoReqDTO, CompanyInfoResDTO } from '../interface';
import { CompanyInfoService } from '../company-info.service';

@Component({
  selector: 'app-company-info-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './company-info-list.component.html',
  styleUrl: './company-info-list.component.scss'
})
export class CompanyInfoListComponent implements OnInit {
  //service
  companyInfoService = inject(CompanyInfoService);
  editCache: Record<string, { edit: boolean; data: CompanyInfoReqDTO }> = {};
  companyInfoOfData: CompanyInfoResDTO[] = [];

  ngOnInit() {
    this.getAllDataCompanyInfo();
  }
  //get APi
  getAllDataCompanyInfo() {
    this.companyInfoService.getAlLDataCompanyInfo().subscribe((res) => {
      this.companyInfoOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteDataCompanyInfo(id: number) {
    this.companyInfoService.deleteCompanyInfo(id).subscribe(() => {
      this.getAllDataCompanyInfo();
    });
  }
  //update
  updateCompanyInfo(id: number): void {
    const index = this.companyInfoOfData.findIndex((item) => item.id === id);
    const updateCompanyInfo = {
      id: this.companyInfoOfData[index].id,
      ...this.editCache[id].data
    };

    this.companyInfoService.updateCompanyInfo(updateCompanyInfo).subscribe(() => {
      this.getAllDataCompanyInfo();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.companyInfoOfData.forEach((item) => {
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
    const index = this.companyInfoOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.companyInfoOfData[index] },
      edit: false
    };
  }

}
