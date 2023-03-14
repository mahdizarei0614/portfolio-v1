import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S0HeaderComponent } from './s0-header.component';

describe('S0HeaderComponent', () => {
  let component: S0HeaderComponent;
  let fixture: ComponentFixture<S0HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S0HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S0HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
