import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliDComponent } from './appli-d.component';

describe('AppliDComponent', () => {
  let component: AppliDComponent;
  let fixture: ComponentFixture<AppliDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
