import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S6CertificationsComponent } from './s6-certifications.component';

describe('S6CertificationsComponent', () => {
  let component: S6CertificationsComponent;
  let fixture: ComponentFixture<S6CertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S6CertificationsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(S6CertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
