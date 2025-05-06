import { Component, inject } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news',
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, NzCardModule],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
  //service
  newService = inject(NewsService);
  private fb = inject(NonNullableFormBuilder);

  serviceForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(6)]],
    description: ['', [Validators.required, Validators.minLength(6)]],
    image: ['', [Validators.required]],
  });

  submitForm(): void {
    const formValue = this.serviceForm.getRawValue();
    this.newService.createNew(formValue).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
