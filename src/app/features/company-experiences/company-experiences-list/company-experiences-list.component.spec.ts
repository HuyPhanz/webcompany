import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExperiencesListComponent } from './company-experiences-list.component';

describe('CompanyExperiencesListComponent', () => {
  let component: CompanyExperiencesListComponent;
  let fixture: ComponentFixture<CompanyExperiencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyExperiencesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyExperiencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
