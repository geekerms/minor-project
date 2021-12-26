import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeDComponent } from './inde-d.component';

describe('IndeDComponent', () => {
  let component: IndeDComponent;
  let fixture: ComponentFixture<IndeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
