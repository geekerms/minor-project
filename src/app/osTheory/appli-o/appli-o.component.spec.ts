import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliOComponent } from './appli-o.component';

describe('AppliOComponent', () => {
  let component: AppliOComponent;
  let fixture: ComponentFixture<AppliOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
