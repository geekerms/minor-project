import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcCoaComponent } from './regc-coa.component';

describe('RegcCoaComponent', () => {
  let component: RegcCoaComponent;
  let fixture: ComponentFixture<RegcCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegcCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
