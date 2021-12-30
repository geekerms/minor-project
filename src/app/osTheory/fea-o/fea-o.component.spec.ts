import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaOComponent } from './fea-o.component';

describe('FeaOComponent', () => {
  let component: FeaOComponent;
  let fixture: ComponentFixture<FeaOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
