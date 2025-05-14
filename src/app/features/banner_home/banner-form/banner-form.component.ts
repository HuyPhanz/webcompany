import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { BannerService } from '../banner.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-banner-form',
  standalone: true,
  imports: [
    NzTagModule,
    NzIconModule,
    NzCardModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzUploadModule
  ],
  templateUrl: './banner-form.component.html',
  styleUrl: './banner-form.component.scss'
})
export class BannerFormComponent {
  // message
  message = inject(NzMessageService)
  //service
  bannerService = inject(BannerService);
  private fb = inject(NonNullableFormBuilder);
  // Form
  validateForm = this.fb.group({
    slogan: ['', Validators.required],
  });
  // List các file upload
  fileList: NzUploadFile[] = [];
  // Trước khi upload file
  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      file.thumbUrl = e.target.result; // ảnh preview
      this.fileList = [...this.fileList, file];
    };
    reader.readAsDataURL(file as any);
    return false; // Ngăn upload tự động
  };

  // Xóa file
  handleRemove = (file: NzUploadFile) => {
    this.fileList = this.fileList.filter(f => f.uid !== file.uid);
  };
  onChange(info: { file: NzUploadFile, fileList: NzUploadFile[] }): void {
    this.fileList = info.fileList.filter(file => file.status !== 'removed');
  }
  // Submit
  onSubmit(): void {
    if (this.validateForm.valid && this.fileList.length > 0) {
      const formData = this.validateForm.getRawValue();
      const payload = {
        slogan: formData.slogan,
        imageUrls: this.fileList
          .map(file => file.thumbUrl)
          .filter((url): url is string => url !== undefined)
      };
      console.log('Gửi payload:', payload);
      this.bannerService.createBanner(payload).subscribe({
        next: (res) => {
          console.log(res);
          this.message.success('Tạo thành công!');
        },error: () => {
          this.message.error('Tạo thất bại!');
        }
      });
      // Reset form
      this.validateForm.reset();
      this.fileList = [];
    }  else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
