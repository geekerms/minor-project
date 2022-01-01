import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdarrDscComponent } from './tdarr-dsc.component';

describe('TdarrDscComponent', () => {
  let component: TdarrDscComponent;
  let fixture: ComponentFixture<TdarrDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdarrDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdarrDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
