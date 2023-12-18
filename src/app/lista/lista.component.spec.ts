import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LISTAComponent } from './lista.component';

describe('LISTAComponent', () => {
  let component: LISTAComponent;
  let fixture: ComponentFixture<LISTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LISTAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LISTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
