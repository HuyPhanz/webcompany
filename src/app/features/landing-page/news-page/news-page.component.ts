import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../news/news.service';
import { NewsResDTO } from '../../news/interface';

@Component({
  selector: 'app-news-page',
  imports: [],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent implements OnInit {
    newService = inject(NewsService);
    dataNews: NewsResDTO [] = []

    getAllDataNews (){
      this.newService.getAllNews().subscribe(data => {
        this.dataNews = data;
      })
    }
    ngOnInit() {
      this.getAllDataNews();
    }
}

