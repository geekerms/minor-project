import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpCppComponent } from './op-cpp.component';

describe('OpCppComponent', () => {
  let component: OpCppComponent;
  let fixture: ComponentFixture<OpCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
