import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationModelsComponent } from './cooperation-models.component';

describe('CooperationModelsComponent', () => {
  let component: CooperationModelsComponent;
  let fixture: ComponentFixture<CooperationModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperationModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperationModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
