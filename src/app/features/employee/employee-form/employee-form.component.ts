import { Employee } from './../interfaces';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EmployeeService } from '../employee.service';
type role = 'Admin' | 'Editor';

@Component({
  selector: 'app-employee',
  imports: [NzCardModule, ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  //http client
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();
  //service
  employeeService = inject(EmployeeService);
  //validate
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required], [this.userNameAsyncValidator]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
    confirm: this.fb.control('', { validators: [], updateOn: 'change' }),
    role: this.fb.control<role | null>(null, Validators.required),
    code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  ngOnInit(): void {

    this.validateForm.controls.confirm.setValidators([this.confirmValidator]);

    // Lắng nghe sự thay đổi của password để cập nhật lại validator của confirm
    this.validateForm.controls.password.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.validateForm.controls.confirm.updateValueAndValidity();
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
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

  confirmValidator = (control: AbstractControl): ValidationErrors | null => {
    const password = this.validateForm?.get('password')?.value;
    if (!control.value) {
      return { required: true };
    } else if (control.value !== password) {
      return { confirm: true, error: true };
    }
    return null;
  };

  onInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(0, 6); // Chỉ giữ lại số và giới hạn 6 ký tự
    this.validateForm.patchValue({ code: value });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      const employeeData: Employee = {
        username: formValue.username,
        email: formValue.email,
        password: formValue.password,
        code: formValue.code,
        role: formValue.role
      };

      this.employeeService.createEmployee(employeeData).subscribe({
        next: (res) => {
          console.log('Employee created successfully:', res);
          // Có thể thêm thông báo thành công ở đây
          this.resetForm(new MouseEvent('')); // Reset form sau khi thành công
        },
        error: (err) => {
          console.error('Failed to create employee:', err);
          // Có thể thêm thông báo lỗi ở đây
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
