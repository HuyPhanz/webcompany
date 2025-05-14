import { Component, inject, OnInit } from '@angular/core';
import { ProjectResDTO } from '../../projects/interface';
import { FeatureService } from '../../feature-service/feature-service.service';
import { FeatureServiceResDTO } from '../../feature-service/interface';

@Component({
  selector: 'app-service-page',
  imports: [],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss'
})
export class ServicePageComponent implements OnInit {
  featureServie = inject(FeatureService);
  dataFeatureService: FeatureServiceResDTO [] = []

  getAllDataProject(){
    this.featureServie.getAllData().subscribe(data=>{
      this.dataFeatureService = data;
    })
  }
  ngOnInit(){
    this.getAllDataProject();
  }

  // services = [
  //   {
  //     icon: 'assets/service-icons/web-dev.jpg',
  //     title: 'Web Development',
  //     description: 'We build responsive and high-performance websites tailored to your business needs.'
  //   },
  //   {
  //     icon: 'assets/service-icons/business-icon.png',
  //     title: 'Business Analysis',
  //     description: 'Transform insights into actions through our expert business analysis and strategic planning.'
  //   },
  //   {
  //     icon: 'assets/service-icons/mobile-app.png',
  //     title: 'App Development',
  //     description: 'Custom mobile app solutions for iOS and Android to elevate your digital presence.'
  //   },
  //   {
  //     icon: 'assets/service-icons/software-icon.png',
  //     title: 'Software Testing',
  //     description: 'Ensure reliability and performance with thorough QA and automated testing services.'
  //   },
  //   {
  //     icon: 'assets/service-icons/performance-icon.png',
  //     title: 'Top Performance',
  //     description: 'Optimize your systems to run faster, smoother, and more efficiently with our expertise.'
  //   },
  //   {
  //     icon: 'assets/service-icons/design-icons.jpg',
  //     title: 'Premium Design',
  //     description: 'Delivering elegant and user-centered UI/UX designs that drive engagement.'
  //   }
  // ];
}
