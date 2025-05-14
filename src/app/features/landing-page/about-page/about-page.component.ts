import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ExperienceResDTO } from '../../company-experiences/interface';
import { CompanyExperiencesService } from '../../company-experiences/company-experiences.service';
import { AboutIntroService } from '../../about-us-intro/about-us-intro.service';
import { AboutIntroResDTO } from '../../about-us-intro/interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-about-page',
  imports: [NgIf, RouterLink],
  templateUrl: './about-page.component.html',
  standalone: true,
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {
  //service companyExperienceService
  companyExperienceService = inject(CompanyExperiencesService);
  //service aboutIntroService
  aboutIntroService = inject(AboutIntroService);
  //data
  companyExperienceOfData: ExperienceResDTO[] = [];
  aboutIntroOfData: AboutIntroResDTO[] = [];
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
  ngOnInit() {
    this.getAllCompanySupport();
    this.getAllAboutIntro();
  }
}
