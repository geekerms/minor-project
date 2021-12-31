import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseCppComponent } from './ifelse-cpp.component';

describe('IfelseCppComponent', () => {
  let component: IfelseCppComponent;
  let fixture: ComponentFixture<IfelseCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelseCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
