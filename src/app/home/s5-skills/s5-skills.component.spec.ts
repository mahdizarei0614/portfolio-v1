import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S5SkillsComponent } from './s5-skills.component';

describe('S5SkillsComponent', () => {
  let component: S5SkillsComponent;
  let fixture: ComponentFixture<S5SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S5SkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S5SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
