import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonWelcomeComponent } from './python-welcome.component';

describe('PythonWelcomeComponent', () => {
  let component: PythonWelcomeComponent;
  let fixture: ComponentFixture<PythonWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
