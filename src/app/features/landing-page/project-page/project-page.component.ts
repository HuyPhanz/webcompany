import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent, NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  imports: [NzCarouselModule, CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  @ViewChild('carousel', { static: false }) carousel?: NzCarouselComponent;

  data = [
    {
      title: 'Hệ thống quản lý chấm công',
      description: 'Dự án phát triển module điều chỉnh thuế cuối năm cho hệ thống quản lý chấm công và tính lương.',
      tags: [
        'Quy mô: 50 man-months',
        'Thiết kế chi tiết/phát triển',
        'PHP Laravel',
        'LaravelSnapy',
        'MySQL',
        'RestAPI',
        'VueJS'
      ],
      image: './assets/img/project-one.jpg'
    },
    {
      title: 'Thiết kế nghiệp vụ SaaS',
      description: 'Dự án phát triển và bảo trì nền tảng thiết kế nghiệp vụ văn phòng.',
      tags: [
        'Quy mô: 7 man-months/tháng',
        'Xây dựng yêu cầu kỹ thuật',
        'Phát triển',
        'ReactJS',
        'NextJS',
        'AppSync',
        'Amplify',
        'OpenSearch'
      ],
      image: './assets/img/prj-2.jpg'
    },
    {
      title: 'Hệ thống SNS du lịch',
      description: 'Dự án phát triển hệ thống web/ứng dụng mới dành cho quảng cáo du lịch/điểm đến du lịch.',
      tags: [
        'Quy mô: 70 man-months',
        'Xây dựng kiến trúc',
        'Thiết kế cơ bản',
        'Phát triển',
        'Laravel 8',
        'RestAPI',
        'VueJS',
        'VueMapbox',
        'Flutter',
        'AWS'
      ],
      image: './assets/img/prj-3.jpg'
    },
    {
      title: 'Ứng dụng quản lý bán hàng',
      description: 'Ứng dụng hỗ trợ quản lý bán hàng đa kênh, đồng bộ tồn kho và đơn hàng.',
      tags: ['Quy mô: 30 man-months', 'Thiết kế hệ thống', 'Node.js', 'NestJS', 'MongoDB', 'Redis'],
      image: './assets/img/prj-4.jpg'
    },
    {
      title: 'Hệ thống đặt vé sự kiện',
      description: 'Nền tảng quản lý sự kiện, đặt vé online và quản lý khách mời.',
      tags: ['ReactJS', 'TailwindCSS', 'Supabase', 'Stripe'],
      image: './assets/img/prj-5.jpg'
    },
    {
      title: 'Web giới thiệu sản phẩm',
      description: 'Thiết kế website giới thiệu sản phẩm chuyên nghiệp.',
      tags: ['Next.js', 'Vercel', 'CMS Headless', 'SEO'],
      image: './assets/img/prj-6.jpg'
    },
    {
      title: 'Hệ thống CRM doanh nghiệp',
      description: 'Quản lý khách hàng và tối ưu quy trình bán hàng.',
      tags: ['PHP', 'MySQL', 'Vue3', 'Vuetify'],
      image: './assets/img/prj-7.jpg'
    },
    {
      title: 'App đặt đồ ăn nhanh',
      description: 'Ứng dụng giao đồ ăn siêu tốc độ.',
      tags: ['React Native', 'Firebase', 'Node.js', 'Express'],
      image: './assets/img/prj-9.jpg'
    },
    {
      title: 'Nền tảng học trực tuyến',
      description: 'Học mọi lúc mọi nơi với video, bài tập, chứng chỉ.',
      tags: ['LMS', 'E-learning', 'Laravel', 'VueJS'],
      image: './assets/img/prj-8.jpg'
    },
    {
      title: 'Website thương mại điện tử',
      description: 'Giải pháp E-commerce mạnh mẽ.',
      tags: ['Magento', 'AWS', 'ElasticSearch', 'Redis'],
      image: './assets/img/prj-6.jpg'
    },
    {
      title: 'Phần mềm quản lý tài chính cá nhân',
      description: 'Quản lý chi tiêu, tiết kiệm và đầu tư hiệu quả.',
      tags: ['React', 'Redux', 'Firebase', 'Material UI'],
      image: './assets/img/prj-12.jpg'
    },
    {
      title: 'App du lịch thông minh',
      description: 'Khám phá địa điểm du lịch nổi tiếng.',
      tags: ['Flutter', 'Google Maps API', 'Dart'],
      image: './assets/img/prj-10.jpg'
    }
  ];

  groupedData = this.groupArray(this.data, 3);

  groupArray(array: any[], groupSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += groupSize) {
      result.push(array.slice(i, i + groupSize));
    }
    return result;
  }

  prev(): void {
    this.carousel?.pre();
  }

  next(): void {
    this.carousel?.next();
  }
}
