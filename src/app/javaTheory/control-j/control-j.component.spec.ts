import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlJComponent } from './control-j.component';

describe('ControlJComponent', () => {
  let component: ControlJComponent;
  let fixture: ComponentFixture<ControlJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
