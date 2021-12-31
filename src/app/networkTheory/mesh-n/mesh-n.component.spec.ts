import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshNComponent } from './mesh-n.component';

describe('MeshNComponent', () => {
  let component: MeshNComponent;
  let fixture: ComponentFixture<MeshNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeshNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
