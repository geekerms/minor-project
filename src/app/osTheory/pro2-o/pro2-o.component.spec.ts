import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pro2OComponent } from './pro2-o.component';

describe('Pro2OComponent', () => {
  let component: Pro2OComponent;
  let fixture: ComponentFixture<Pro2OComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pro2OComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro2OComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
