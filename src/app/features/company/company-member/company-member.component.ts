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
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-company-member',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule
  ],
  templateUrl: './company-member.component.html',
  styleUrl: './company-member.component.scss'
})
export class CompanyMemberComponent implements OnDestroy {
  title = 'sdas';
  //inject serivce
  companyService = inject(CompanyService);
  // validate
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    order: this.fb.control(0, [Validators.required]),
    position: this.fb.control('', [Validators.required]),
    bio: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)])
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
      const formValue = this.validateForm.getRawValue();
      this.companyService.createCompanyMember(formValue).subscribe({
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
