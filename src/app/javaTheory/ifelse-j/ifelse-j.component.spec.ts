import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseJComponent } from './ifelse-j.component';

describe('IfelseJComponent', () => {
  let component: IfelseJComponent;
  let fixture: ComponentFixture<IfelseJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelseJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
