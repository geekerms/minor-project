import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakJComponent } from './break-j.component';

describe('BreakJComponent', () => {
  let component: BreakJComponent;
  let fixture: ComponentFixture<BreakJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
