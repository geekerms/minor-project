import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypesCppComponent } from './datatypes-cpp.component';

describe('DatatypesCppComponent', () => {
  let component: DatatypesCppComponent;
  let fixture: ComponentFixture<DatatypesCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatypesCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatypesCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
