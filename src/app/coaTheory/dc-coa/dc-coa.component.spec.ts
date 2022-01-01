import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCoaComponent } from './dc-coa.component';

describe('DcCoaComponent', () => {
  let component: DcCoaComponent;
  let fixture: ComponentFixture<DcCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
