import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactListComponent } from './customer-contact-list.component';

describe('CustomerContactListComponent', () => {
  let component: CustomerContactListComponent;
  let fixture: ComponentFixture<CustomerContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerContactListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
