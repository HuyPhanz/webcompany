import { Component,  inject  } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { CompanySupportService } from '../company-support.service';
@Component({
  selector: 'app-company-support-form',
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
  templateUrl: './company-support-form.component.html',
  styleUrl: './company-support-form.component.scss'
})
export class CompanySupportFormComponent {
  // service
  companySupportService = inject(CompanySupportService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    icon: ['', Validators.required]
  });

  //submmit
  onSubmit() {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      const data = {
        title: formValue.title,
        description: formValue.description,
        icon: formValue.icon
      };
      this.companySupportService.createCompanySupport(data).subscribe({
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
