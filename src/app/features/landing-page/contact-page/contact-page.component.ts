import { Component, inject, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Observable, Observer, Subject } from 'rxjs';
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
export class ContactPageComponent implements OnDestroy {
  //service
  customerContact = inject(CustomerContactService);
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    message: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)]),
    status: ['', [Validators.required]],
  });
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  userNameAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 500);
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const valueForm = this.validateForm.getRawValue();
      this.customerContact.createCustomerContact(valueForm).subscribe({
        next: (res) => {
          console.log(res);
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
