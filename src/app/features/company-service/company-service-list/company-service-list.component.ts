import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { ServiceReqDTO, ServiceResDTO } from '../interface';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-company-service-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './company-service-list.component.html',
  styleUrl: './company-service-list.component.scss'
})
export class CompanyServiceListComponent  implements OnInit {
  // message
  message = inject(NzMessageService);
  //service
  companyService = inject(CompanyServiceService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: ServiceReqDTO }> = {};
  companyServiceOfData: ServiceResDTO[] = [];

  ngOnInit() {
    this.getAllCompanyService();
  }
  //get APi
  getAllCompanyService() {
    this.companyService.getAllCompanyService().subscribe((res) => {
      this.companyServiceOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteCompanyService(id: number) {
    this.companyService.deleteCompanyService(id).subscribe(() => {
      this.getAllCompanyService();
      this.message.success('Xóa thành công!');
    });
  }
  //update
  updateCompanyService(id: number): void {
    const index = this.companyServiceOfData.findIndex((item) => item.id === id);
    const data = { ...this.editCache[id].data };

    // Bổ sung: ép imageUrls thành array nếu cần
    if (data.tags && typeof data.tags === 'string') {
      data.tags = [data.tags];
    }

    const updateCompanyService = {
      id: this.companyServiceOfData[index].id,
      ...data
    };

    this.companyService.updateCompanyService(updateCompanyService).subscribe(() => {
      this.getAllCompanyService();
    });
    this.message.success('Cập nhật thành công!');
  }
  //
  updateEditCache(): void {
    this.companyServiceOfData.forEach((item) => {
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
    const index = this.companyServiceOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.companyServiceOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
