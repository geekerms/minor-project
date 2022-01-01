import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypeCComponent } from './datatype-c.component';

describe('DatatypeCComponent', () => {
  let component: DatatypeCComponent;
  let fixture: ComponentFixture<DatatypeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatypeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
