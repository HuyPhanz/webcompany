import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { SupportReqDTO, SupportResDTO } from '../interface';
import { CompanySupportService } from '../company-support.service';
@Component({
  selector: 'app-company-support-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './company-support-list.component.html',
  styleUrl: './company-support-list.component.scss'
})
export class CompanySupportListComponent implements OnInit {
  //service
  companySupportService = inject(CompanySupportService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: SupportReqDTO }> = {};
  companySupportOfData: SupportResDTO[] = [];

  ngOnInit() {
    this.getAllCompanySupport();
  }
  //get APi
  getAllCompanySupport() {
    this.companySupportService.getAllCompanySupport().subscribe((res) => {
      this.companySupportOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteSupportService(id: number) {
    this.companySupportService.deleteCompanySupport(id).subscribe(() => {
      this.getAllCompanySupport();
    });
  }
  //update
  updateCompanySupport(id: number): void {
    const index = this.companySupportOfData.findIndex((item) => item.id === id);
    const updateBanner = {
      id: this.companySupportOfData[index].id,
      ...this.editCache[id].data
    };

    this.companySupportService.updateCompanySupport(updateBanner).subscribe(() => {
      this.getAllCompanySupport();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.companySupportOfData.forEach((item) => {
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
    const index = this.companySupportOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.companySupportOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
