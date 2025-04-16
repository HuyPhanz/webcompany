import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutProjectComponent } from './out-project.component';

describe('OutProjectComponent', () => {
  let component: OutProjectComponent;
  let fixture: ComponentFixture<OutProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
