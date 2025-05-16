import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCarouselComponent, NzCarouselContentDirective } from 'ng-zorro-antd/carousel';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { PARTNERS } from '../../../constant';
import { BannerService } from '../../banner_home/banner.service';
import { BannerResDTO } from '../../banner_home/interface';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormControlComponent, NzFormDirective } from 'ng-zorro-antd/form';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { CustomerContactService } from '../../company/customer_contact/customer-contact.service';
import { ServiceResDTO } from '../../company-service/interface';
import { CompanyServiceService } from '../../company-service/company-service.service';
import { DataResDTO } from '../../home-intro/interface';
import { SupportResDTO } from '../../company-support/interface';
import { CompanySupportService } from '../../company-support/company-support.service';
import { HomeIntroService } from '../../home-intro/home-intro.service';
import { PartnersService } from '../../partners/partners.service';
import { PartnersResDTO } from '../../partners/interface';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    NzButtonComponent,
    NzCarouselComponent,
    NzCarouselContentDirective,
    NzIconDirective,
    NzColDirective,
    NzRowDirective,
    ReactiveFormsModule,
    NzFormControlComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzInputDirective,
    NzFormDirective
  ],
  templateUrl: './home-page.component.html',
  standalone: true,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  // message
  message = inject(NzMessageService);
  // Service API Banner
  bannerService = inject(BannerService);
  // Get API Customer_Contact
  contactCustomerService = inject(CustomerContactService)
  // Get API Company Service
  companyService = inject(CompanyServiceService)
  // Get API Company Service
  companySupportService = inject(CompanySupportService)
  //Get API Home Intro
  homeIntroService = inject(HomeIntroService);
  //Get API Partners
  partnerService = inject(PartnersService);
  // value data banner
  dataBanner: BannerResDTO[] = [];
  dataCompanyService : ServiceResDTO[] = [];
  dataHomeIntro: DataResDTO[]=[];
  dataCompanySupport: SupportResDTO[]=[];
  dataPartners: PartnersResDTO[] = [];
  selectedBanner?: BannerResDTO;
  // NgOnInit
  ngOnInit() {
    this.getAllDataBanner();
    this.getAllDataCompanyService();
    this.getAllDataCompanySupport();
    this.getAllDataHomeIntro();
    this.getAllDataPartners();
  }
  // Get API Banner
  getAllDataBanner() {
    this.bannerService.getAlLDataBanner().subscribe((data) => {
      this.dataBanner = data;
      if (data.length > 0) {
        this.selectedBanner = data[0];
      }
    });
  }
  // Get API Company Service
  getAllDataCompanyService(){
    this.companyService.getAllCompanyService().subscribe((data) => {
        this.dataCompanyService = data;
    })
  }
  // Get API Company Support
  getAllDataCompanySupport(){
    this.companySupportService.getAllCompanySupport().subscribe((data) => {
      this.dataCompanySupport = data;
    })
  }
  // Get API Home Intro
  getAllDataHomeIntro(){
    this.homeIntroService.getAllData().subscribe((data) => {
      this.dataHomeIntro = data;
    })
  }
  // Get API Home Intro
  getAllDataPartners(){
    this.partnerService.getAllData().subscribe((data) => {
      this.dataPartners = data;
    })
  }
  // Customer Contact Validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    message: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)]),
    status: ['', [Validators.required]]
  });
  submitForm(): void {
    if (this.validateForm.valid) {
      const valueForm = this.validateForm.getRawValue();
      this.contactCustomerService.createCustomerContact(valueForm).subscribe({
        next: (res) => {
          console.log(res);
          this.validateForm.reset();
          this.message.success('Đã gửi!');
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



  // Carousel
  effects = 'scrollx';
  //next and prev
  @ViewChild('carouselRef', { static: false }) carousel!: NzCarouselComponent;
  next(): void {
    this.carousel.next();
  }
  prev(): void {
    this.carousel.pre();
  }

  //PARTNERS
  partners = PARTNERS;


}
