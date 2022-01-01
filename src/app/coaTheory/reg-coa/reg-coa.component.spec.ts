import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCoaComponent } from './reg-coa.component';

describe('RegCoaComponent', () => {
  let component: RegCoaComponent;
  let fixture: ComponentFixture<RegCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
