import { Component, inject } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, NzCardModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  //service
  productService = inject(ProductService);
  // validate
  private fb = inject(NonNullableFormBuilder);

  serviceForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(6)]],
    content: ['', [Validators.required, Validators.minLength(6)]],
    slug: ['', [Validators.required, Validators.pattern('^[a-z0-9]+(?:-[a-z0-9]+)*$')]]
  });

  submitForm(): void {
    const formValue = this.serviceForm.getRawValue();
    this.productService.createProduct(formValue).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
