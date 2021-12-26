import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowhileJComponent } from './dowhile-j.component';

describe('DowhileJComponent', () => {
  let component: DowhileJComponent;
  let fixture: ComponentFixture<DowhileJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowhileJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowhileJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
