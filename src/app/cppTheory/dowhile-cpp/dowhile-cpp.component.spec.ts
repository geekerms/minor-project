import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowhileCppComponent } from './dowhile-cpp.component';

describe('DowhileCppComponent', () => {
  let component: DowhileCppComponent;
  let fixture: ComponentFixture<DowhileCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowhileCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowhileCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
