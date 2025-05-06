import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalButtonComponent } from '../shared/modal-button/modal-button.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-test',
  imports: [
    NzBreadCrumbModule,
    NzCardComponent,
    NzButtonModule,
    NzIconModule,
    ModalButtonComponent,
    RouterLink,
    BreadcrumbComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  modalVisible = false;

  openModal(): void {
    this.modalVisible = true;
  }

  onOk(): void {
    console.log('Người dùng bấm OK');
  }

  onCancel(): void {
    console.log('Người dùng bấm Cancel');
  }

}
