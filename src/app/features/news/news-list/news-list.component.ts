import { Component, inject, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { typeOfNews } from '../interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  imports: [NzTableModule, NzButtonModule, NzModalModule, NzIconModule, CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit {
  //service
  newService = inject(NewsService);
  productOfData: typeOfNews[] =[];
  // isVisible = false;
  // isOkLoading = false;
  ngOnInit() {
    this.loadNews()
  }
  loadNews(){
    this.newService.getAllNews().subscribe(res =>{
      this.productOfData = res;
    })
  }
}
