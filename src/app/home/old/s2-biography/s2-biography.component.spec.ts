import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2BiographyComponent } from './s2-biography.component';

describe('S2BiographyComponent', () => {
  let component: S2BiographyComponent;
  let fixture: ComponentFixture<S2BiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S2BiographyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(S2BiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
