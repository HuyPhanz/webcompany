import { Component } from '@angular/core';
import { NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: 'layout.component.scss',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzContentComponent,
    RouterOutlet,
    NzHeaderComponent,
    NzIconDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzSubMenuComponent,
    RouterLink
  ]
})
export class LayoutComponent {
  isCollapsed = false;
}
