import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlQuestionComponent } from './sql-question.component';

describe('SqlQuestionComponent', () => {
  let component: SqlQuestionComponent;
  let fixture: ComponentFixture<SqlQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
