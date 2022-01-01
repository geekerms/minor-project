import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsCoaComponent } from './ins-coa.component';

describe('InsCoaComponent', () => {
  let component: InsCoaComponent;
  let fixture: ComponentFixture<InsCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
