import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EmployeeService } from '../employee.service';
type role = 'ADMIN' | 'EDITOR';

@Component({
  selector: 'app-employee',
  imports: [NzCardModule, ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  //http client
  private fb = inject(NonNullableFormBuilder);
  //service
  employeeService = inject(EmployeeService);
  //validate
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
    role: this.fb.control<role | null>(null, Validators.required),
    emCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  userNameAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      this.employeeService.createPloyee(formValue).subscribe({
        next: (res) => {
          console.log('Employee created successfully:', res);
          this.resetForm(new MouseEvent(''));
        },
        error: (err) => {
          console.error('Failed to create employee:', err);
        }
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
      // Có thể thêm thông báo cho người dùng biết rằng form không hợp lệ
    }
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }
}
