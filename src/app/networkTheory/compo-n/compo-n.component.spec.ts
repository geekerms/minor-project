import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoNComponent } from './compo-n.component';

describe('CompoNComponent', () => {
  let component: CompoNComponent;
  let fixture: ComponentFixture<CompoNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
