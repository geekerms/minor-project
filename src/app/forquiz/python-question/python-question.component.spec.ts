import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonQuestionComponent } from './python-question.component';

describe('PythonQuestionComponent', () => {
  let component: PythonQuestionComponent;
  let fixture: ComponentFixture<PythonQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
