import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutIntroReqDTO, AboutIntroResDTO } from '../interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AboutIntroService } from '../about-us-intro.service';
@Component({
  selector: 'app-about-us-intro-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './about-us-intro-list.component.html',
  styleUrl: './about-us-intro-list.component.scss'
})
export class AboutUsIntroListComponent implements OnInit{
  // message
  message = inject(NzMessageService);
  //service
  aboutIntroService = inject(AboutIntroService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: AboutIntroReqDTO }> = {};
  aboutIntroOfData: AboutIntroResDTO[] = [];

  ngOnInit() {
    this.getAllCompanyExperience();
  }
  //get APi
  getAllCompanyExperience() {
    this.aboutIntroService.getAllData().subscribe((res) => {
      this.aboutIntroOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteExperienceService(id: number) {
    this.aboutIntroService.deleteData(id).subscribe(() => {
      this.getAllCompanyExperience();
    });
  }
  //update
  updateCompanyExperience(id: number): void {
    const index = this.aboutIntroOfData.findIndex((item) => item.id === id);
    const updateExperience = {
      id: this.aboutIntroOfData[index].id,
      ...this.editCache[id].data
    };

    this.aboutIntroService.updateData(updateExperience).subscribe(() => {
      this.getAllCompanyExperience();
    });
    this.message.success('Cập nhật thành công!');
  }
  //
  updateEditCache(): void {
    this.aboutIntroOfData.forEach((item) => {
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
    const index = this.aboutIntroOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.aboutIntroOfData[index] },
      edit: false
    };
  }

}
