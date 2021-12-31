import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncOComponent } from './func-o.component';

describe('FuncOComponent', () => {
  let component: FuncOComponent;
  let fixture: ComponentFixture<FuncOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
