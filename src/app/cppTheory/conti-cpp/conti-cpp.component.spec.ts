import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiCppComponent } from './conti-cpp.component';

describe('ContiCppComponent', () => {
  let component: ContiCppComponent;
  let fixture: ComponentFixture<ContiCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContiCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContiCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
