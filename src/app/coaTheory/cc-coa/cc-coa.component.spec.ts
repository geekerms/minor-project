import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCoaComponent } from './cc-coa.component';

describe('CcCoaComponent', () => {
  let component: CcCoaComponent;
  let fixture: ComponentFixture<CcCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
