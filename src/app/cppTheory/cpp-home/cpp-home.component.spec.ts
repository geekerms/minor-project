import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppHomeComponent } from './cpp-home.component';

describe('CppHomeComponent', () => {
  let component: CppHomeComponent;
  let fixture: ComponentFixture<CppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
