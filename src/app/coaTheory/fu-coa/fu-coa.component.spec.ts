import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuCoaComponent } from './fu-coa.component';

describe('FuCoaComponent', () => {
  let component: FuCoaComponent;
  let fixture: ComponentFixture<FuCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
