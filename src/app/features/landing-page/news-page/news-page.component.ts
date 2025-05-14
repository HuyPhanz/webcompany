import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../news/news.service';
import { NewsResDTO, TYPE } from '../../news/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-page',
  imports: [RouterLink],
  templateUrl: './news-page.component.html',
  standalone: true,
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent implements OnInit {
  newService = inject(NewsService);
  dataNews: NewsResDTO[] = [];

  getAllDataNews() {
    this.newService.getAllNews().subscribe((data) => {
      // this.dataNews = data;

      // Sắp xếp theo thời gian tạo mới nhất (giả sử có field `createdDate`)
      const sortedData = [...data].sort((a, b) => {
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
      });

      // Gán bài viết mới nhất là type = 1
      const featured = sortedData[0];
      featured.type = TYPE.FeaturedArticles;

      // Lấy 3 bài viết ngẫu nhiên từ phần còn lại
      const remaining = sortedData.slice(1);
      const shuffled = remaining.sort(() => 0.5 - Math.random());
      const related = shuffled.slice(0, 3);
      related.forEach(article => article.type = TYPE.RelatedArticles);

      // Gán type = 0 cho những bài còn lại
      const others = remaining.filter(article => !related.includes(article));
      others.forEach(article => article.type = 0);

      // Gộp lại toàn bộ danh sách có thêm trường `type`
      this.dataNews = [featured, ...related, ...others];
    });
  }
  ngOnInit() {
    this.getAllDataNews();
  }
}
