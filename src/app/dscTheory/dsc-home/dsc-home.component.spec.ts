import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DscHomeComponent } from './dsc-home.component';

describe('DscHomeComponent', () => {
  let component: DscHomeComponent;
  let fixture: ComponentFixture<DscHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DscHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DscHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
