import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdlDscComponent } from './cdl-dsc.component';

describe('CdlDscComponent', () => {
  let component: CdlDscComponent;
  let fixture: ComponentFixture<CdlDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdlDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdlDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
