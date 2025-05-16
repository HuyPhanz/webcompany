import { Component, inject, OnInit } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzPopconfirmDirective } from 'ng-zorro-antd/popconfirm';
import { NzTableCellDirective, NzTableComponent, NzThMeasureDirective } from 'ng-zorro-antd/table';
import { BannerService } from '../banner.service';
import { BannerReqDTO, BannerResDTO } from '../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-banner-list',
  imports: [
    NzButtonComponent,
    NzTableModule,
    NzIconDirective,
    NzInputDirective,
    NzPopconfirmDirective,
    NzTableCellDirective,
    NzTableComponent,
    FormsModule,
    NzThMeasureDirective
  ],
  templateUrl: './banner-list.component.html',
  styleUrl: './banner-list.component.scss'
})
export class BannerListComponent implements OnInit {
  // message
  message = inject(NzMessageService);
  //service
  bannerService = inject(BannerService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: BannerReqDTO }> = {};
  bannerOfData: BannerResDTO[] = [];

  ngOnInit() {
    this.getAllNews();
  }
  //get APi
  getAllNews() {
    this.bannerService.getAlLDataBanner().subscribe((res) => {
      this.bannerOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteNew(id: number) {
    this.bannerService.deleteBanner(id).subscribe(() => {
      this.getAllNews();
      this.message.success('Xóa thành công!');
    });
  }
  //update
  updateBanner(id: number): void {
    const index = this.bannerOfData.findIndex((item) => item.id === id);
    const updateBanner = {
      id: this.bannerOfData[index].id,
      ...this.editCache[id].data
    };

    this.bannerService.updateBanner(updateBanner).subscribe(() => {
      this.getAllNews();
    });
    this.message.success('Cập nhật thành công!');
  }
  //
  updateEditCache(): void {
    this.bannerOfData.forEach((item) => {
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
    const index = this.bannerOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.bannerOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
