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
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { Observable, Observer, Subject } from 'rxjs';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-company-history',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule
  ],
  templateUrl: './company-history.component.html',
  styleUrl: './company-history.component.scss'
})
export class CompanyHistoryComponent implements OnDestroy {
  //import service
  companyService = inject(CompanyService)
  //validate
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    title: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
    year: this.fb.control(0, [Validators.required, Validators.min(1900)]),
    order: this.fb.control(0, [Validators.required, Validators.min(1)]),
    description: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(1000)])
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
    if(this.validateForm.valid){
      const formValue = this.validateForm.getRawValue();
    this.companyService.createCompanyHistory(formValue).subscribe({
      next: (res) => {
        console.log('data:', res);},
      error: (error) => {
        console.log(error);}
    })
    }
  }
}
