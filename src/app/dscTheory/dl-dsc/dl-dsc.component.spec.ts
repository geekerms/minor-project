import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlDscComponent } from './dl-dsc.component';

describe('DlDscComponent', () => {
  let component: DlDscComponent;
  let fixture: ComponentFixture<DlDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
