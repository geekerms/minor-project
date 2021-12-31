import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarCppComponent } from './var-cpp.component';

describe('VarCppComponent', () => {
  let component: VarCppComponent;
  let fixture: ComponentFixture<VarCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
