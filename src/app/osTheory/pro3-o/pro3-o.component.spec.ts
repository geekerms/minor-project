import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pro3OComponent } from './pro3-o.component';

describe('Pro3OComponent', () => {
  let component: Pro3OComponent;
  let fixture: ComponentFixture<Pro3OComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pro3OComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro3OComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
