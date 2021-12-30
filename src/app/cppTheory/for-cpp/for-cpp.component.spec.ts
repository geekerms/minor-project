import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCppComponent } from './for-cpp.component';

describe('ForCppComponent', () => {
  let component: ForCppComponent;
  let fixture: ComponentFixture<ForCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
