import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaQuestionComponent } from './java-question.component';

describe('JavaQuestionComponent', () => {
  let component: JavaQuestionComponent;
  let fixture: ComponentFixture<JavaQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
