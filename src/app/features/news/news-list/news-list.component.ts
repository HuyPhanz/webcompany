import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { News, NewsReqDTO } from '../interface';
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
  productOfData: News[] = [];

  ngOnInit() {
    this.getAllNews();
  }
  //get APi
  getAllNews() {
    this.newService.getAllNews().subscribe((res) => {
      this.productOfData = res;
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
  updateNew(id: string): void {
    const index = this.productOfData.findIndex((item) => item.slug === id);
    const updateNew = {
      id: this.productOfData[index].id,
      ...this.editCache[id].data
    };

    this.newService.updateNew(updateNew).subscribe(() => {
      this.getAllNews();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.productOfData.forEach((item) => {
      this.editCache[item.slug] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  //start edit
  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: string): void {
    const index = this.productOfData.findIndex((item) => item.slug === id);
    this.editCache[id] = {
      data: { ...this.productOfData[index] },
      edit: false
    };
  }
}
