import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {  NewsReqDTO, NewsResDTO } from '../interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit {
  //service
  newService = inject(NewsService);
  editCache: Record<string, { edit: boolean; data: NewsReqDTO }> = {};
  newOfData: NewsResDTO[] = [];

  ngOnInit() {
    this.getAllNews();
  }
  //get APi
  getAllNews() {
    this.newService.getAllNews().subscribe((res) => {
      this.newOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteNew(id: number) {
    this.newService.deleteNew(id).subscribe(() => {
      this.getAllNews();
    });
  }
  //update
  updateNew(id: number): void {
    const index = this.newOfData.findIndex((item) => item.id === id);
    const updateNew = {
      id: this.newOfData[index].id,
      ...this.editCache[id].data
    };

    this.newService.updateNew(updateNew).subscribe(() => {
      this.getAllNews();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.newOfData.forEach((item) => {
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
    const index = this.newOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.newOfData[index] },
      edit: false
    };
  }
}
