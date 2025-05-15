import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NewsService } from '../../news/news.service';
import { NewsResDTO } from '../../news/interface';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-news-detail',
  imports: [NzBreadCrumbModule, RouterLink, NgIf],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  //service
  newsService = inject(NewsService);

  newsId = 0;
  newsDetail: NewsResDTO | null = null;
  newsList:NewsResDTO[]=[];
  //get By ID
  loadNewsDetail(): void {
    this.newsService.getNewsById(this.newsId).subscribe({
      next: (data: NewsResDTO) => {
        this.newsDetail = data;
      },
      error: (err) => {
        console.error('Error loading news detail:', err);
      }
    });
  }
  //get data
  getData(){
      this.newsService.getAllNews().subscribe({
        next: (data: NewsResDTO[]) => {
          this.newsList = data.slice(0, 3);
        }
      })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.newsId = Number(idParam);
        this.loadNewsDetail();
      }
    });
    this.getData();
  }
}
