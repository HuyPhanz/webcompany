import { Component, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MENU_HEADER } from '../../constant';
import { filter } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrl: 'landing-page.component.scss',
  standalone: true,
  imports: [
    NzDropDownModule,
    NzIconModule,
    NzLayoutModule,
    RouterLink,
    RouterOutlet,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule,
    NzCarouselModule,
    NzButtonModule,
    RouterLinkActive
  ],
  styles: [
    `
      section {
        margin-bottom: 2rem;
      }
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
        user-select: none;
      }
    `
  ]
})
export class LandingPageComponent implements OnInit {
  //select language
  currentLanguage = 'vi';

  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    console.log('Ngôn ngữ hiện tại:', lang);
  }
  //constant
  menuHeader = MENU_HEADER;

  // isMenuOpen
  isMenuOpen = false;
  //
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects.replace('/', '');
    });
  }
}
