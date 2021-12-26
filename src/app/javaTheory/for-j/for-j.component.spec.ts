import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForJComponent } from './for-j.component';

describe('ForJComponent', () => {
  let component: ForJComponent;
  let fixture: ComponentFixture<ForJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
