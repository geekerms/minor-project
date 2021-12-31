import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCppComponent } from './switch-cpp.component';

describe('SwitchCppComponent', () => {
  let component: SwitchCppComponent;
  let fixture: ComponentFixture<SwitchCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
