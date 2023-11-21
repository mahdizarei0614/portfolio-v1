import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DddVisualGraphComponent } from './ddd-visual-graph.component';

describe('DddVisualGraphComponent', () => {
  let component: DddVisualGraphComponent;
  let fixture: ComponentFixture<DddVisualGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DddVisualGraphComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(DddVisualGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
