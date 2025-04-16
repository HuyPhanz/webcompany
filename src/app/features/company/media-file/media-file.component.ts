import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-media-file',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    CommonModule,
    NzInputModule,
    NzButtonComponent,
    NzCardModule
  ],
  templateUrl: './media-file.component.html',
  styleUrl: './media-file.component.scss'
})
export class MediaFileComponent implements OnInit {
  //service
  companyService = inject(CompanyService);
  //validate
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    entity_type: ['', Validators.required],
    entity_id: ['', Validators.required],
    url: ['', Validators.required],
    file_name: ['', Validators.required],
    file_path: ['', Validators.required],
    file_type: ['', Validators.required],
    file_size: ['', Validators.required]
  });

  ngOnInit(): void {
    if (this.validateForm.valid) {
      console.log('Form Data:', this.validateForm.value);
    }
  }
  onSubmit(): void {
    if(this.validateForm.valid){
      const valueForm = this.validateForm.getRawValue();
      this.companyService.createMediaFile(valueForm).subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      })
    }
  }
}
