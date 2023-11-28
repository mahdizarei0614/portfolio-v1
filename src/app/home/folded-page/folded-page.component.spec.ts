import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldedPageComponent } from './folded-page.component';

describe('FoldedPageComponent', () => {
  let component: FoldedPageComponent;
  let fixture: ComponentFixture<FoldedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoldedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoldedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
