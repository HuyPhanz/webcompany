import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManagerListComponent } from './company-manager-list.component';

describe('CompanyManagerListComponent', () => {
  let component: CompanyManagerListComponent;
  let fixture: ComponentFixture<CompanyManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyManagerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
