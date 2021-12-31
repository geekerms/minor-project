import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWelcomeComponent } from './data-welcome.component';

describe('DataWelcomeComponent', () => {
  let component: DataWelcomeComponent;
  let fixture: ComponentFixture<DataWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
