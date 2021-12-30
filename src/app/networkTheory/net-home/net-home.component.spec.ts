import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetHomeComponent } from './net-home.component';

describe('NetHomeComponent', () => {
  let component: NetHomeComponent;
  let fixture: ComponentFixture<NetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
