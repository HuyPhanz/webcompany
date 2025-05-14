import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntoFormComponent } from './home-into-form.component';

describe('HomeIntoFormComponent', () => {
  let component: HomeIntoFormComponent;
  let fixture: ComponentFixture<HomeIntoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIntoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIntoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
