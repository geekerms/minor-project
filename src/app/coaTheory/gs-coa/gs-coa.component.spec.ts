import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsCoaComponent } from './gs-coa.component';

describe('GsCoaComponent', () => {
  let component: GsCoaComponent;
  let fixture: ComponentFixture<GsCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
