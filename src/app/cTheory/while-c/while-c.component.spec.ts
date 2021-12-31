import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileCComponent } from './while-c.component';

describe('WhileCComponent', () => {
  let component: WhileCComponent;
  let fixture: ComponentFixture<WhileCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhileCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
