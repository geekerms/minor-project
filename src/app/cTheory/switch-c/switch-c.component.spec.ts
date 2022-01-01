import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCComponent } from './switch-c.component';

describe('SwitchCComponent', () => {
  let component: SwitchCComponent;
  let fixture: ComponentFixture<SwitchCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
