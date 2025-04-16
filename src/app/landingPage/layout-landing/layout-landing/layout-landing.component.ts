import { Component } from '@angular/core';
import { LIST_MENU } from './constant';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FooterComponent } from '../../../shared/footer/footer.component';
@Component({
  selector: 'app-layout-landing',
  imports: [
    FooterComponent,
    NgClass, RouterLink,
    NzDropdownMenuComponent,
    NzDropDownDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzIconDirective,NzLayoutModule, RouterOutlet, FooterComponent
  ],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.scss'
})
export class LayoutLandingComponent {
  protected readonly menuList = LIST_MENU;
  selectedLang: 'en' | 'vi' = 'en';
  isMenuOpen = false;

}
