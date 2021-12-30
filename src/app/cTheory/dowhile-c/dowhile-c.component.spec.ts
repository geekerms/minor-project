import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowhileCComponent } from './dowhile-c.component';

describe('DowhileCComponent', () => {
  let component: DowhileCComponent;
  let fixture: ComponentFixture<DowhileCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowhileCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowhileCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
