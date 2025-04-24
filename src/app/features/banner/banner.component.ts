import { Component, inject } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadComponent, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner',
  imports: [NzCardComponent, ReactiveFormsModule, NzInputModule, NzButtonModule, NzFormModule, NzUploadComponent, NzIconModule, CommonModule, NzInputModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  fileList: NzUploadFile[] = [];
  //validate
  private fb = inject(FormBuilder);
  validateForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })
  beforeUpload = (file: NzUploadFile): boolean => {
    const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
    if (isImage) {
      this.fileList = [...this.fileList, file];
    }
    return false;
  };
  onSubmit(): void {
    if (this.validateForm.valid && this.fileList.length > 0) {
      const formData = this.validateForm.value;
      console.log('Form Data:', formData);
      console.log('Uploaded Images:', this.fileList);
    }
    }
}
