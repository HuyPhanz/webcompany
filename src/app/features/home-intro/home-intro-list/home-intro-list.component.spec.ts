import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroListComponent } from './home-intro-list.component';

describe('HomeIntroListComponent', () => {
  let component: HomeIntroListComponent;
  let fixture: ComponentFixture<HomeIntroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIntroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIntroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
