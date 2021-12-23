import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesJComponent } from './features-j.component';

describe('FeaturesJComponent', () => {
  let component: FeaturesJComponent;
  let fixture: ComponentFixture<FeaturesJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
