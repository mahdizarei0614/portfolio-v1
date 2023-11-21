import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ExperienceComponent } from './s3-experience.component';

describe('S3ExperienceComponent', () => {
  let component: S3ExperienceComponent;
  let fixture: ComponentFixture<S3ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [S3ExperienceComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(S3ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
