import { Component, inject, OnInit } from '@angular/core';
import { CompanyService } from '../../company/company.service';
import { CompanyDetailResDTO, CompanyInfoResDTO } from '../../company/interface';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  standalone: true,
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {
  // get Api About
  companyInfoService = inject(CompanyService);
  dataCompanyDetail: CompanyDetailResDTO[] = [];

  getAllDataCompanyDetail() {
    this.companyInfoService.getAlLDataCompanyDetail().subscribe((data) => {
      this.dataCompanyDetail = data;
    });
  }
  ngOnInit() {
    this.getAllDataCompanyDetail();
    this.getAllDataCompanyInfo();
  }
  // get Api Comapny Info
  dataCompanyInfo: CompanyInfoResDTO[] = [];

  getAllDataCompanyInfo() {
    this.companyInfoService.getAlLDataCompanyInfo().subscribe((data) => {
      this.dataCompanyInfo = data;
    });
  }
}
