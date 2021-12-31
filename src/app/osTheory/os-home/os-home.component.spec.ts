import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsHomeComponent } from './os-home.component';

describe('OsHomeComponent', () => {
  let component: OsHomeComponent;
  let fixture: ComponentFixture<OsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
