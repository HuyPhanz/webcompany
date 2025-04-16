import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItFieldsComponent } from './it-fields.component';

describe('ItFieldsComponent', () => {
  let component: ItFieldsComponent;
  let fixture: ComponentFixture<ItFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItFieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
