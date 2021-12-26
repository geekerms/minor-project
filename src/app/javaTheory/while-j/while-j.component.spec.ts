import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileJComponent } from './while-j.component';

describe('WhileJComponent', () => {
  let component: WhileJComponent;
  let fixture: ComponentFixture<WhileJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhileJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
