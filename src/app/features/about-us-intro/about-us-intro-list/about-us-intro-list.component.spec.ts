import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsIntroListComponent } from './about-us-intro-list.component';

describe('AboutUsIntroListComponent', () => {
  let component: AboutUsIntroListComponent;
  let fixture: ComponentFixture<AboutUsIntroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsIntroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsIntroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
