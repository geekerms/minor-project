import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CslDscComponent } from './csl-dsc.component';

describe('CslDscComponent', () => {
  let component: CslDscComponent;
  let fixture: ComponentFixture<CslDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CslDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CslDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
