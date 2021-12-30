import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileCppComponent } from './while-cpp.component';

describe('WhileCppComponent', () => {
  let component: WhileCppComponent;
  let fixture: ComponentFixture<WhileCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhileCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
