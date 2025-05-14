import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureServiceFormComponent } from './feature-service-form.component';

describe('FeatureServiceFormComponent', () => {
  let component: FeatureServiceFormComponent;
  let fixture: ComponentFixture<FeatureServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
