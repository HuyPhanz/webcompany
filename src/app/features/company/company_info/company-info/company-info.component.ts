import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CompanyService } from '../../company.service';

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
  standalone: true
})
export class CompanyInfoComponent {
  //service
  companyInfoService = inject(CompanyService);

  private fb = inject(NonNullableFormBuilder);
  //form
  detailForm = this.fb.group({
    title: this.fb.control('', Validators.required),
    description: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)])
  });
  infoForm = this.fb.group({
    siteName: this.fb.control('', [Validators.required]),
    icon: this.fb.control('', [Validators.required]),
    year: this.fb.control(0, [Validators.required]),
    siteDescription: this.fb.control('', [Validators.required]),
    director: this.fb.control('', [Validators.required]),
    contactEmail: this.fb.control('', [Validators.email, Validators.required]),
    contactPhone: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    contactAddress: this.fb.control('', [Validators.required]),
    workingHours: this.fb.control('', [Validators.required]),
    mapUrl: this.fb.control('', [Validators.required])
  });

  onSubmitInfo(): void {
    if (this.infoForm.valid) {
      const formValue = this.infoForm.getRawValue();
      this.companyInfoService.createCompanyInfo(formValue).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  onSubmitDetail(): void {
    if (this.detailForm.valid) {
      const formValue = this.detailForm.getRawValue();
      this.companyInfoService.createCompanyDetail(formValue).subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
