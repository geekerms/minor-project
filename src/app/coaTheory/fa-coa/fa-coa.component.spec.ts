import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaCoaComponent } from './fa-coa.component';

describe('FaCoaComponent', () => {
  let component: FaCoaComponent;
  let fixture: ComponentFixture<FaCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
