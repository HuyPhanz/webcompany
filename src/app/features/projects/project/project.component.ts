import { Component, inject,  } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProjectService } from '../project.service';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
@Component({
  selector: 'app-project-form',
  standalone: true,
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
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  // service
  ProjectService = inject(ProjectService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    content: ['', Validators.required],
  });
  //hashtag

  //submmit
  onSubmit(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.getRawValue();
      this.ProjectService.createProject(formValue).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
      console.log(formValue);
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
