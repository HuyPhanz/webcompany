import { Component, inject, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ExperienceResDTO } from '../../company-experiences/interface';
import { CompanyExperiencesService } from '../../company-experiences/company-experiences.service';


@Component({
  selector: 'app-about-page',
  imports: [NgStyle],
  templateUrl: './about-page.component.html',
  standalone: true,
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit {
  //service
  companyExperienceService = inject(CompanyExperiencesService);
  //data
  companyExperienceOfData: ExperienceResDTO[] = [];
  //Get Api
  getAllCompanySupport() {
    this.companyExperienceService.getAllData().subscribe((res) => {
      this.companyExperienceOfData = res;
    });
  }
  ngOnInit() {
    this.getAllCompanySupport();
  }
}
