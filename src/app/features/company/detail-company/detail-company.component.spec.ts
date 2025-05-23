import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompanyComponent } from './detail-company.component';

describe('DetailCompanyComponent', () => {
  let component: DetailCompanyComponent;
  let fixture: ComponentFixture<DetailCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCompanyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
