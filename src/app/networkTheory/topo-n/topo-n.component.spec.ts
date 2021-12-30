import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoNComponent } from './topo-n.component';

describe('TopoNComponent', () => {
  let component: TopoNComponent;
  let fixture: ComponentFixture<TopoNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
