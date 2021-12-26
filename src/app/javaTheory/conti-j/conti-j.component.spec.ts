import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiJComponent } from './conti-j.component';

describe('ContiJComponent', () => {
  let component: ContiJComponent;
  let fixture: ComponentFixture<ContiJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContiJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContiJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
