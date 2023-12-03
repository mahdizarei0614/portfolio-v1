import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalInstanceComponent } from './terminal-instance.component';

describe('TerminalInstanceComponent', () => {
  let component: TerminalInstanceComponent;
  let fixture: ComponentFixture<TerminalInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalInstanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminalInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
