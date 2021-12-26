import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchJComponent } from './switch-j.component';

describe('SwitchJComponent', () => {
  let component: SwitchJComponent;
  let fixture: ComponentFixture<SwitchJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
