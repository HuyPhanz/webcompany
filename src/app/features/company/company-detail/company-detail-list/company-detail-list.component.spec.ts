import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailListComponent } from './company-detail-list.component';

describe('CompanyDetailListComponent', () => {
  let component: CompanyDetailListComponent;
  let fixture: ComponentFixture<CompanyDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
