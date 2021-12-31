import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingNComponent } from './ring-n.component';

describe('RingNComponent', () => {
  let component: RingNComponent;
  let fixture: ComponentFixture<RingNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
