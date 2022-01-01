import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCComponent } from './history-c.component';

describe('HistoryCComponent', () => {
  let component: HistoryCComponent;
  let fixture: ComponentFixture<HistoryCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
