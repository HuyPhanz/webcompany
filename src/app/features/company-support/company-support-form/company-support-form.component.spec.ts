import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySupportFormComponent } from './company-support-form.component';

describe('CompanySupportFormComponent', () => {
  let component: CompanySupportFormComponent;
  let fixture: ComponentFixture<CompanySupportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySupportFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
