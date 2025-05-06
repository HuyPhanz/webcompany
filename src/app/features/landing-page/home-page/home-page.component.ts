import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCarouselComponent, NzCarouselContentDirective } from 'ng-zorro-antd/carousel';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { PARTNERS } from '../../../constant';
import { BannerService } from '../../banner_home/banner.service';
import { BannerResDTO } from '../../banner_home/interface';
import { ProductService } from '../../products/product.service';
import {  ProductResDTO } from '../../products/interface';
import { CompanyDetailService } from '../../company/company-detail/company-detail.service';
import { CompanyDetailResDTO } from '../../company/company-detail/interface';
import { ProjectService } from '../../projects/project.service';
import { ProjectResDTO } from '../../projects/interface';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    NzButtonComponent,
    NzCarouselComponent,
    NzCarouselContentDirective,
    NzIconDirective,
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './home-page.component.html',
  standalone: true,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  // Get API Banner
  bannerService = inject(BannerService);
  dataBanner: BannerResDTO[] = [];
  selectedBanner?: BannerResDTO;
  getAllDataBanner() {
    this.bannerService.getAlLDataBanner().subscribe((data) => {
      this.dataBanner = data;
      if (data.length > 0) {
        this.selectedBanner = data[0];
      }
    });
  }
  ngOnInit() {
    this.getAllDataBanner();
    this.getAllDataProduct();
    this.getAllDataCompanyDetail();
    this.getAllDataProject();
  }
  // get Api product
  productService = inject(ProductService);
  dataProduct: ProductResDTO[] = [];

  getAllDataProduct() {
    this.productService.getAllProducts().subscribe((data) => {
      this.dataProduct = data;
    });
  }
  // get Api About
  companyDetailService = inject(CompanyDetailService);
  dataCompanyDetail: CompanyDetailResDTO[] = [];

  getAllDataCompanyDetail() {
    this.companyDetailService.getAlLDataCompanyDetail().subscribe((data) => {
      this.dataCompanyDetail = data;
    });
  }
  // get Api project
  projectService = inject(ProjectService);
  dataProject: ProjectResDTO[] = [];

  getAllDataProject() {
    this.projectService.getAllProjects().subscribe((data) => {
      this.dataProject = data.slice(0, 3);
    });
  }

  effects = 'scrollx';

  //next and prev
  @ViewChild('carouselRef', { static: false }) carousel!: NzCarouselComponent;
  next(): void {
    this.carousel.next();
  }

  prev(): void {
    this.carousel.pre();
  }

//  listCard
  cards = [
    {
      icon: 'desktop',
      title: 'Branding Identity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'codepen',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'edit',
      title: 'Illustration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'ant-design',
      title: 'Unique Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'dropbox',
      title: 'Easy to Customize',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'customer-service',
      title: 'Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
    }
  ];
//PARTNERS
  partners= PARTNERS;

///validate Form

}
