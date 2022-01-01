import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlDscComponent } from './ll-dsc.component';

describe('LlDscComponent', () => {
  let component: LlDscComponent;
  let fixture: ComponentFixture<LlDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
