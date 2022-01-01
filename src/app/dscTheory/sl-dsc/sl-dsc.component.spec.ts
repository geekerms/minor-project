import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlDscComponent } from './sl-dsc.component';

describe('SlDscComponent', () => {
  let component: SlDscComponent;
  let fixture: ComponentFixture<SlDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
