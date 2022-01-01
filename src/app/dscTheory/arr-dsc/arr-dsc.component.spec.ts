import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrDscComponent } from './arr-dsc.component';

describe('ArrDscComponent', () => {
  let component: ArrDscComponent;
  let fixture: ComponentFixture<ArrDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
