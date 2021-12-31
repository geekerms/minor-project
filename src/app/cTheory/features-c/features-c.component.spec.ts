import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesCComponent } from './features-c.component';

describe('FeaturesCComponent', () => {
  let component: FeaturesCComponent;
  let fixture: ComponentFixture<FeaturesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
