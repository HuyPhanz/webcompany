import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CustomerContactService } from '../../company/customer_contact/customer-contact.service';

@Component({
  selector: 'app-contact-page',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  //service
  contactCustomerService = inject(CustomerContactService);
  private fb= inject(NonNullableFormBuilder)
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    message: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)]),
    status: ['', [Validators.required]],
  })

  submitForm(){
    if (this.validateForm.valid) {
      const valueForm = this.validateForm.getRawValue();
      this.contactCustomerService.createCustomerContact(valueForm).subscribe({
        next: (res) => {
          console.log(res);  this.validateForm.reset();
        }
      })
    }else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
