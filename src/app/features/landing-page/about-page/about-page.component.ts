import { Component, inject, OnInit } from '@angular/core';
import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { ExperienceResDTO } from '../../company-experiences/interface';
import { CompanyExperiencesService } from '../../company-experiences/company-experiences.service';
import { AboutIntroService } from '../../about-us-intro/about-us-intro.service';
import { AboutIntroResDTO } from '../../about-us-intro/interface';
import { RouterLink } from '@angular/router';
import { CompanyManagerService } from '../../company-manager/company-manager.service';
import { ManagerResDTO } from '../../company-manager/interface';


@Component({
  selector: 'app-about-page',
  imports: [NgIf, RouterLink, NgStyle, NgForOf],
  templateUrl: './about-page.component.html',
  standalone: true,
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {
  //service companyExperienceService
  companyExperienceService = inject(CompanyExperiencesService);
  //service aboutIntroService
  aboutIntroService = inject(AboutIntroService);
  //service companyManagerService
  companyManagerService = inject(CompanyManagerService);
  //data
  companyExperienceOfData: ExperienceResDTO[] = [];
  aboutIntroOfData: AboutIntroResDTO[] = [];
  // data companyManagerService
  topMembers: ManagerResDTO[] = [];
  bottomMembers: ManagerResDTO[] = [];
  //Get Api companyExperienceService
  getAllCompanySupport() {
    this.companyExperienceService.getAllData().subscribe((res) => {
      this.companyExperienceOfData = res;
    });
  }
  //Get Api About Intro
  getAllAboutIntro() {
    this.aboutIntroService.getAllData().subscribe((res) => {
      this.aboutIntroOfData = res;
    });
  }
  //Get Api About Intro
  getAllcompanyExperience() {
    this.companyManagerService.getAllData().subscribe((res) => {
      this.topMembers = res.slice(0, 2); // 2 phần tử đầu
      this.bottomMembers = res.slice(-4); // 4 phần tử cuối
    });
  }
  ngOnInit() {
    this.getAllCompanySupport();
    this.getAllAboutIntro();
    this.getAllcompanyExperience();
  }
}
