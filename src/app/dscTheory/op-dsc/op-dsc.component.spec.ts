import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpDscComponent } from './op-dsc.component';

describe('OpDscComponent', () => {
  let component: OpDscComponent;
  let fixture: ComponentFixture<OpDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
