import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-media-file',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    CommonModule,
    NzInputModule,
    NzButtonComponent,
    NzCardModule
  ],
  templateUrl: './media-file.component.html',
  styleUrl: './media-file.component.scss'
})
export class MediaFileComponent  {
  //service
  companyService = inject(CompanyService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    entityType: ['', Validators.required],
    entityId: ['', Validators.required],
    url: ['', Validators.required],
    fileName: ['', Validators.required],
    filePath: ['', Validators.required],
    fileType: ['', Validators.required],
    fileSize: ['', Validators.required]
  });


  onSubmit(): void {
    if (this.validateForm.valid) {
      const valueForm = this.validateForm.getRawValue();
      this.companyService.createMediaFile(valueForm).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
