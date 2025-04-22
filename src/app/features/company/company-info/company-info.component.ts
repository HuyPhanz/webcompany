import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.scss',
  styles: [
    `
      .ant-select.ant-select-in-form-item.phone-select {
        width: 80px;
      }
      .register-area {
        margin-bottom: 8px;
      }
      .ant-card-head-title {
        font-size: 25px;
      }
    `
  ]
})
export class CompanyInfoComponent {
  //service
  companyService = inject(CompanyService);

  private fb = inject(NonNullableFormBuilder);
  //validate
  validateForm = this.fb.group({
    siteName: this.fb.control('', [Validators.required]),
    icon: this.fb.control('', [Validators.required]),
    siteDescription: this.fb.control('', [Validators.required]),
    contactEmail: this.fb.control('', [Validators.email, Validators.required]),
    contactPhone: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    contactAddress: this.fb.control('', [Validators.required]),
    workingHours: this.fb.control('', [Validators.required]),
    mapEmbedUrl: this.fb.control('', [Validators.required])
  });

  onSubmit(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      this.companyService.createCompanyInfo(formValue).subscribe({
        next: (res) => {
          console.log(res);
        }
      });
    }
  }
}
