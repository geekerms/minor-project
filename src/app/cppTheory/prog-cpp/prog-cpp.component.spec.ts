import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgCppComponent } from './prog-cpp.component';

describe('ProgCppComponent', () => {
  let component: ProgCppComponent;
  let fixture: ComponentFixture<ProgCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
