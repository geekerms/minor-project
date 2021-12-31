import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcOComponent } from './proc-o.component';

describe('ProcOComponent', () => {
  let component: ProcOComponent;
  let fixture: ComponentFixture<ProcOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
