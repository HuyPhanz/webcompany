import { Component, inject } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadComponent, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-banner',
  imports: [NzIconDirective,NzButtonComponent,NzCardComponent, ReactiveFormsModule, NzInputModule, NzButtonModule, NzFormModule, NzUploadComponent, NzIconModule, CommonModule, NzInputModule],
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

  // beforeUpdate
  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      file.thumbUrl = e.target.result;
      this.fileList = [...this.fileList, file];
    };

    reader.readAsDataURL(file as any);
    return false;
  };
  // preview image
  handlePreview = (file: NzUploadFile): void => {
    const url = file.thumbUrl || file.url;
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('❗Không có URL để preview!');
    }
  };
  //submit form
  onSubmit(): void {
    if (this.validateForm.valid && this.fileList.length > 0) {
      const formData = this.validateForm.value;
      console.log('Form Data:', formData);
      console.log('Uploaded Images:', this.fileList);
    }
    }
}
