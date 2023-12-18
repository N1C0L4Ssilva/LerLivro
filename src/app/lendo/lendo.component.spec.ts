import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LENDOComponent } from './lendo.component';

describe('LENDOComponent', () => {
  let component: LENDOComponent;
  let fixture: ComponentFixture<LENDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LENDOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LENDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
