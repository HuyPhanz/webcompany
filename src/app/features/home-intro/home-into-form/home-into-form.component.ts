import { Component,  inject  } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { HomeIntroService } from '../home-intro.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-home-into-form',
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
  templateUrl: './home-into-form.component.html',
  styleUrl: './home-into-form.component.scss'
})
export class HomeIntoFormComponent {
  // message
  message = inject(NzMessageService);
  // service
  homeIntroService = inject(HomeIntroService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required]
  });

  //submmit
  onSubmit() {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      const data = {
        title: formValue.title,
        description: formValue.description,
        image: formValue.image
      };
      this.homeIntroService.createData(data).subscribe({
        next: (res) => {
          console.log(res);
          this.message.success('Thêm thành công!');
        },
        error: (err) => {
          console.log(err);
          this.message.error('Lỗi dữ liệu tải lên!');
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
