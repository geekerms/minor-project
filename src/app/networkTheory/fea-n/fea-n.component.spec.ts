import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaNComponent } from './fea-n.component';

describe('FeaNComponent', () => {
  let component: FeaNComponent;
  let fixture: ComponentFixture<FeaNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
