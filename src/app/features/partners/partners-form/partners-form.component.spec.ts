import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFormComponent } from './partners-form.component';

describe('PartnersFormComponent', () => {
  let component: PartnersFormComponent;
  let fixture: ComponentFixture<PartnersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
