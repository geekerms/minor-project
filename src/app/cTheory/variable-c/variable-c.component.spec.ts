import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableCComponent } from './variable-c.component';

describe('VariableCComponent', () => {
  let component: VariableCComponent;
  let fixture: ComponentFixture<VariableCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
