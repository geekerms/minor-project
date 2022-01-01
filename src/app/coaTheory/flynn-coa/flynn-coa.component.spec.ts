import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlynnCoaComponent } from './flynn-coa.component';

describe('FlynnCoaComponent', () => {
  let component: FlynnCoaComponent;
  let fixture: ComponentFixture<FlynnCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlynnCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlynnCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
