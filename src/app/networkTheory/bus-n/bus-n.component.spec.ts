import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNComponent } from './bus-n.component';

describe('BusNComponent', () => {
  let component: BusNComponent;
  let fixture: ComponentFixture<BusNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
