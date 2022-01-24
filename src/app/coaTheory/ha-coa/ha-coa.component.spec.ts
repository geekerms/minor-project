import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaCoaComponent } from './ha-coa.component';

describe('HaCoaComponent', () => {
  let component: HaCoaComponent;
  let fixture: ComponentFixture<HaCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
