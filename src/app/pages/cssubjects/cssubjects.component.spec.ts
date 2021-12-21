import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssubjectsComponent } from './cssubjects.component';

describe('CssubjectsComponent', () => {
  let component: CssubjectsComponent;
  let fixture: ComponentFixture<CssubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
