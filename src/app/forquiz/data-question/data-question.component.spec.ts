import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataQuestionComponent } from './data-question.component';

describe('DataQuestionComponent', () => {
  let component: DataQuestionComponent;
  let fixture: ComponentFixture<DataQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
