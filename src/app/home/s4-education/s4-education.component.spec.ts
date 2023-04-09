import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4EducationComponent } from './s4-education.component';

describe('S4EducationComponent', () => {
  let component: S4EducationComponent;
  let fixture: ComponentFixture<S4EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S4EducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S4EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
