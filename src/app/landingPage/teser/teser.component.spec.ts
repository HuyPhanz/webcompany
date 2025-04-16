import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeserComponent } from './teser.component';

describe('TeserComponent', () => {
  let component: TeserComponent;
  let fixture: ComponentFixture<TeserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
