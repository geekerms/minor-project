import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseCComponent } from './ifelse-c.component';

describe('IfelseCComponent', () => {
  let component: IfelseCComponent;
  let fixture: ComponentFixture<IfelseCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelseCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
