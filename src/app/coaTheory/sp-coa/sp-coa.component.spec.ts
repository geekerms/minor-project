import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCoaComponent } from './sp-coa.component';

describe('SpCoaComponent', () => {
  let component: SpCoaComponent;
  let fixture: ComponentFixture<SpCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
