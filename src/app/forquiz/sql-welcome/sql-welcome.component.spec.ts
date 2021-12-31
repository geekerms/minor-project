import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlWelcomeComponent } from './sql-welcome.component';

describe('SqlWelcomeComponent', () => {
  let component: SqlWelcomeComponent;
  let fixture: ComponentFixture<SqlWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
