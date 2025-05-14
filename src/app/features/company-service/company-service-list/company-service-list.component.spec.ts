import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServiceListComponent } from './company-service-list.component';

describe('CompanyServiceListComponent', () => {
  let component: CompanyServiceListComponent;
  let fixture: ComponentFixture<CompanyServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyServiceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
