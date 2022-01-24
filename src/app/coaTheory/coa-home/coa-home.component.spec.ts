import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaHomeComponent } from './coa-home.component';

describe('CoaHomeComponent', () => {
  let component: CoaHomeComponent;
  let fixture: ComponentFixture<CoaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
