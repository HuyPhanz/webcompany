import { Component } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCarouselComponent, NzCarouselContentDirective } from 'ng-zorro-antd/carousel';
import { NzTimelineComponent, NzTimelineItemComponent } from 'ng-zorro-antd/timeline';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrl: 'landing-page.component.scss',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzCarouselComponent,
    NzCarouselContentDirective,
    NzTimelineItemComponent,
    NzTimelineComponent,
    NzDropdownMenuComponent,
    NzDropDownDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzIconDirective
  ],
  styles: [
    `
      section {
        margin-bottom: 2rem;
      }
    `
  ]
})
export class LandingPageComponent {
  projects = [
    { image: 'assets/project1.jpg', title: 'Project One', description: 'Description of project one.' },
    { image: 'assets/project2.jpg', title: 'Project Two', description: 'Description of project two.' },
    { image: 'assets/project3.jpg', title: 'Project Three', description: 'Description of project three.' }
  ];

  testimonials = [
    {
      image: 'assets/client1.jpg',
      name: 'John Doe',
      role: 'CTO',
      company: 'TechCorp',
      feedback: 'Fantastic service! Helped scale our business with top-notch solutions.',
      rating: 5
    },
    {
      image: 'assets/client2.jpg',
      name: 'Jane Smith',
      role: 'Product Manager',
      company: 'InnovateX',
      feedback: 'Professional and reliable. Highly recommend their IT expertise.',
      rating: 4
    },
    {
      image: 'assets/client3.jpg',
      name: 'Michael Lee',
      role: 'CEO',
      company: 'StartUp Inc.',
      feedback: 'The best team we have worked with. They truly understand innovation.',
      rating: 5
    },
    {
      image: 'assets/client4.jpg',
      name: 'Emily Johnson',
      role: 'CFO',
      company: 'FinanceTech',
      feedback: 'Highly professional service with great communication.',
      rating: 4
    },
    {
      image: 'assets/client5.jpg',
      name: 'Robert Brown',
      role: 'Tech Lead',
      company: 'CloudNet',
      feedback: 'Reliable and scalable solutions for our business.',
      rating: 5
    },
    {
      image: 'assets/client6.jpg',
      name: 'Sophia Davis',
      role: 'Marketing Head',
      company: 'AdPro',
      feedback: 'They helped us implement AI-driven marketing strategies.',
      rating: 4
    }
  ];

  chunkedTestimonials: any[] = [];
  selectedLang: 'en' | 'vi' = 'en';
  isMenuOpen = false;

  constructor() {
    this.chunkedTestimonials = this.chunkArray(this.testimonials, 3);
  }

  chunkArray(arr: any[], size: number): any[] {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  }

  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
