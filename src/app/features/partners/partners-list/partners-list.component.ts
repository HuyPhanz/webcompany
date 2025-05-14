import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnersReqDTO, PartnersResDTO } from '../interface';
import { PartnersService } from '../partners.service';
@Component({
  selector: 'app-partners-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './partners-list.component.html',
  styleUrl: './partners-list.component.scss'
})
export class PartnersListComponent implements OnInit {
  //service
  partnerService = inject(PartnersService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: PartnersReqDTO }> = {};
  // Data Renderoing
  partnersOfData: PartnersResDTO[] = [];

  ngOnInit() {
    this.getAllData();
  }
  //get APi
  getAllData() {
    this.partnerService.getAllData().subscribe((res) => {
      this.partnersOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteSupportService(id: number) {
    this.partnerService.deleteData(id).subscribe(() => {
      this.getAllData();
    });
  }
  //update
  updateCompanySupport(id: number): void {
    const index = this.partnersOfData.findIndex((item) => item.id === id);
    const updatePartners = {
      id: this.partnersOfData[index].id,
      ...this.editCache[id].data
    };

    this.partnerService.updateData(updatePartners).subscribe(() => {
      this.getAllData();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.partnersOfData.forEach((item) => {
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
    const index = this.partnersOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.partnersOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
