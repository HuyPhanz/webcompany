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
  private fb = inject(NonNullableFormBuilder);
  //service
  employeeService = inject(EmployeeService);
  //validate
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
    role: this.fb.control<role | null>(null, Validators.required),
    emCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      this.employeeService.createPloyee(formValue).subscribe({
        next: (result) => {
          console.log(result);
        }
      });
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
