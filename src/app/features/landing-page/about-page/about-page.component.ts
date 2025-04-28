import { Component, inject, OnInit } from '@angular/core';
import { CompanyDetailService } from '../../company/company-detail/company-detail.service';
import { CompanyDetailResDTO } from '../../company/company-detail/interface';
import { CompanyInfoService } from '../../company/company_info/company-info.service';
import { CompanyInfoResDTO } from '../../company/company_info/interface';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {
// get Api About
  companyDetailService = inject(CompanyDetailService);
  dataCompanyDetail: CompanyDetailResDTO [] = []

  getAllDataCompanyDetail(){
    this.companyDetailService.getAlLDataCompanyDetail().subscribe(data=>{
      this.dataCompanyDetail = data;
    })
  }
  ngOnInit() {
    this.getAllDataCompanyDetail();
    this.getAllDataCompanyInfo();
  }
  // get Api Comapny Info
  companyInfoService = inject(CompanyInfoService);
  dataCompanyInfo: CompanyInfoResDTO [] = []

  getAllDataCompanyInfo(){
    this.companyInfoService.getAlLDataCompanyInfo().subscribe(data=>{
      this.dataCompanyInfo = data;
    })
  }
}
