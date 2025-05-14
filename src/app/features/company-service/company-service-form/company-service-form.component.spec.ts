import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServiceFormComponent } from './company-service-form.component';

describe('CompanyServiceFormComponent', () => {
  let component: CompanyServiceFormComponent;
  let fixture: ComponentFixture<CompanyServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
