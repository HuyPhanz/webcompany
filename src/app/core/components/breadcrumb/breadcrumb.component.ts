import { Component, computed } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-component',
  templateUrl: 'breadcrumb.component.html',
  imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, RouterLink],
  standalone: true
})
export class BreadcrumbComponent {
  breadcrumbs = computed(() => this.breadcrumbService.breadcrumbs());

  constructor(private breadcrumbService: BreadcrumbService) {}
}
