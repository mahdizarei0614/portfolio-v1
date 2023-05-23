import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sx0CasinoComponent } from './sx0-casino.component';

describe('Sx0CasinoComponent', () => {
  let component: Sx0CasinoComponent;
  let fixture: ComponentFixture<Sx0CasinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sx0CasinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sx0CasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
