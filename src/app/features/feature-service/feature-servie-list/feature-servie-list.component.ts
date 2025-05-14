import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureServiceReqDTO, FeatureServiceResDTO } from '../interface';
import { FeatureService } from '../feature-service.service';
@Component({
  selector: 'app-feature-servie-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './feature-servie-list.component.html',
  styleUrl: './feature-servie-list.component.scss'
})
export class FeatureServieListComponent implements OnInit {
  //service
  featureService = inject(FeatureService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: FeatureServiceReqDTO }> = {};
  // Data Rendering
  featureServiceOfData: FeatureServiceResDTO[] = [];

  ngOnInit() {
    this.getAllData();
  }
  //get APi
  getAllData() {
    this.featureService.getAllData().subscribe((res) => {
      this.featureServiceOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteSupportService(id: number) {
    this.featureService.deleteData(id).subscribe(() => {
      this.getAllData();
    });
  }
  //update
  updateCompanySupport(id: number): void {
    const index = this.featureServiceOfData.findIndex((item) => item.id === id);
    const updatePartners = {
      id: this.featureServiceOfData[index].id,
      ...this.editCache[id].data
    };

    this.featureService.updateData(updatePartners).subscribe(() => {
      this.getAllData();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.featureServiceOfData.forEach((item) => {
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
    const index = this.featureServiceOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.featureServiceOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
