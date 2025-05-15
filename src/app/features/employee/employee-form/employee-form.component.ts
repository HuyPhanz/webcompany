import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  imports: [NzCardModule, ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  // message
  message = inject(NzMessageService)
  //
  private fb = inject(NonNullableFormBuilder);
  //service
  employeeService = inject(EmployeeService);
  //validate
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [Validators.required]),
    emCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      this.employeeService.createPloyee(formValue).subscribe({
        next: (result) => {
          console.log(result);
          this.message.success('Thêm thành công!');
          this.validateForm.reset();
        },
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.message.error('Thêm không thành công!');
        }
      });
    }
  }
}
