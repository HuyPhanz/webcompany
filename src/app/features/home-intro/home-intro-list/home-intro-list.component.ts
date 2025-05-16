import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeIntroService } from '../home-intro.service';
import { DataReqDTO, DataResDTO } from '../interface';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-home-intro-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './home-intro-list.component.html',
  styleUrl: './home-intro-list.component.scss'
})
export class HomeIntroListComponent implements OnInit {
  // message
  message = inject(NzMessageService);
  //service
  homeIntroService = inject(HomeIntroService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: DataReqDTO }> = {};
  homeIntroOfData: DataResDTO[] = [];

  ngOnInit() {
    this.getAllCompanySupport();
  }
  //get APi
  getAllCompanySupport() {
    this.homeIntroService.getAllData().subscribe((res) => {
      this.homeIntroOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteSupportService(id: number) {
    this.homeIntroService.deleteData(id).subscribe(() => {
      this.getAllCompanySupport();
      this.message.success('Xóa thành công!');
    });
  }
  //update
  updateCompanySupport(id: number): void {
    const index = this.homeIntroOfData.findIndex((item) => item.id === id);
    const updateBanner = {
      id: this.homeIntroOfData[index].id,
      ...this.editCache[id].data
    };

    this.homeIntroService.updateData(updateBanner).subscribe(() => {
      this.getAllCompanySupport();
    });
    this.message.success('Cập nhật thành công!');
  }
  //
  updateEditCache(): void {
    this.homeIntroOfData.forEach((item) => {
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
    const index = this.homeIntroOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.homeIntroOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
