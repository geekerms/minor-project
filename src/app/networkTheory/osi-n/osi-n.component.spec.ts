import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiNComponent } from './osi-n.component';

describe('OsiNComponent', () => {
  let component: OsiNComponent;
  let fixture: ComponentFixture<OsiNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsiNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
