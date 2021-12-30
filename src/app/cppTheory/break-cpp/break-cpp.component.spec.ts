import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakCppComponent } from './break-cpp.component';

describe('BreakCppComponent', () => {
  let component: BreakCppComponent;
  let fixture: ComponentFixture<BreakCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
