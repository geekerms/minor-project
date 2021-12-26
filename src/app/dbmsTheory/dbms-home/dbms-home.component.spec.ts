import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmsHomeComponent } from './dbms-home.component';

describe('DbmsHomeComponent', () => {
  let component: DbmsHomeComponent;
  let fixture: ComponentFixture<DbmsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbmsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
