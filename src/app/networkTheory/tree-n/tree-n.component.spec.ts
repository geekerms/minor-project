import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNComponent } from './tree-n.component';

describe('TreeNComponent', () => {
  let component: TreeNComponent;
  let fixture: ComponentFixture<TreeNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
