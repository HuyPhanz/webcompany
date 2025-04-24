import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [
    NzTagModule,
    NzIconModule,
    NzCardComponent,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
  ]
})
export class ProjectComponent {
  //validate
  private fb = inject(NonNullableFormBuilder)
  validateForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required]
  })
  //hastag
  tags = ['#Technology'];
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
    }
    this.inputValue = '';
    this.inputVisible = false;
  }


  //submmit

  onSubmit(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.value;
      const data = {
        title: formValue.title,
        description: formValue.description,
        tags: this.tags
      };
      // this.http.post('https://your-api.com/projects', data).subscribe({
      //   next: (res) => {
      //     console.log('✅ Gửi thành công:', res);
      //   },
      //   error: (err) => {
      //     console.error('❌ Gửi thất bại:', err);
      //   }
      // });
      console.log('Submitted Data:', data);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }

}
