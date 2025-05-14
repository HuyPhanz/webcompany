import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureServieListComponent } from './feature-servie-list.component';

describe('FeatureServieListComponent', () => {
  let component: FeatureServieListComponent;
  let fixture: ComponentFixture<FeatureServieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureServieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureServieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
