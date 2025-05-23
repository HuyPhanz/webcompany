import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CompanyService } from '../company.service';
import { typeOfDataCompanyDetail } from '../interface';

@Component({
  selector: 'app-detail-company',
  imports: [ReactiveFormsModule, NzFormModule, NzButtonModule, NzCardModule, NzInputModule, NzButtonModule],
  templateUrl: './detail-company.component.html',
  styleUrl: './detail-company.component.scss',
  styles: [
    `
      [nz-form] {
        max-width: 800px;
      }

      .ant-select.ant-select-in-form-item.phone-select {
        width: 80px;
      }

      .register-area {
        margin-bottom: 8px;
      }
    `
  ]
})
export class DetailCompanyComponent {
  //service
  companyService = inject(CompanyService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    title: this.fb.control('', Validators.required),
    content: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)])
  });
  //function submit
  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue: typeOfDataCompanyDetail = this.validateForm.getRawValue();
      this.companyService.createCompanyDetail(formValue).subscribe({
        next: (res) => {
          console.log('Tạo thông tin thành công:', res);
          // Optional: hiển thị toast hoặc chuyển trang
        },
        error: (err) => {
          console.error('Lỗi tạo thông tin:', err);
        }
      });
    }
  }
}
