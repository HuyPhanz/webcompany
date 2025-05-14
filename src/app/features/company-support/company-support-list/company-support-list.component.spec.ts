import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySupportListComponent } from './company-support-list.component';

describe('CompanySupportListComponent', () => {
  let component: CompanySupportListComponent;
  let fixture: ComponentFixture<CompanySupportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySupportListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySupportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
