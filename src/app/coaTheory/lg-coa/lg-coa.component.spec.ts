import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCoaComponent } from './lg-coa.component';

describe('LgCoaComponent', () => {
  let component: LgCoaComponent;
  let fixture: ComponentFixture<LgCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
