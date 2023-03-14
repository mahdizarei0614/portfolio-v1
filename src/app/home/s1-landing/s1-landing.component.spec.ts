import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1LandingComponent } from './s1-landing.component';

describe('S1LandingComponent', () => {
  let component: S1LandingComponent;
  let fixture: ComponentFixture<S1LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1LandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
