import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceReqDTO, ExperienceResDTO } from '../interface';
import { CompanyExperiencesService } from '../company-experiences.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-company-experiences-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './company-experiences-list.component.html',
  styleUrl: './company-experiences-list.component.scss'
})
export class CompanyExperiencesListComponent  implements OnInit {
  // message
  message = inject(NzMessageService);
  //service
  companyExperienceService = inject(CompanyExperiencesService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: ExperienceReqDTO }> = {};
  companyExperienceOfData: ExperienceResDTO[] = [];

  ngOnInit() {
    this.getAllCompanyExperience();
  }
  //get APi
  getAllCompanyExperience() {
    this.companyExperienceService.getAllData().subscribe((res) => {
      this.companyExperienceOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteExperienceService(id: number) {
    this.companyExperienceService.deleteData(id).subscribe(() => {
      this.getAllCompanyExperience();
    });
  }
  //update
  updateCompanyExperience(id: number): void {
    const index = this.companyExperienceOfData.findIndex((item) => item.id === id);
    const updateExperience = {
      id: this.companyExperienceOfData[index].id,
      ...this.editCache[id].data
    };

    this.companyExperienceService.updateData(updateExperience).subscribe(() => {
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
