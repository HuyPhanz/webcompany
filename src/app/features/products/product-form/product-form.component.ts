import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProductService } from '../product.service';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
@Component({
  selector: 'app-product-form',
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
    NzNoAnimationModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  // service
  productService = inject(ProductService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required]
  });
  //hashtag
  tags = ['#Technology'];
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  handleClose(removedTag: any): void {
    this.tags = this.tags.filter((tag) => tag !== removedTag);
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
      const formValue = this.validateForm.getRawValue();
      const data = {
        title: formValue.title,
        description: formValue.description,
        image: formValue.image,
        tags: this.tags
      };
      this.productService.createProduct(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
      console.log('Submitted Data:', data);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }
}
