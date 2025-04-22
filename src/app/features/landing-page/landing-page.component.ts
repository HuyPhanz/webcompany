import { Component, OnInit } from '@angular/core';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MENU_HEADER } from '../../constant';
import { filter } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrl: 'landing-page.component.scss',
  standalone: true,
  imports: [
    NzLayoutModule,
    RouterLink,
    RouterOutlet,
    NzDropdownMenuComponent,
    NzDropDownDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzIconDirective,
    NzCarouselModule
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
  //constant
  menuHeader = MENU_HEADER;
  //header
  selectedLang: 'en' | 'vi' = 'en';
  isMenuOpen = false;
  //
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects.replace('/', '');
    });
  }
}
