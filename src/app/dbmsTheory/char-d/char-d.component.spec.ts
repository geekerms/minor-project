import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDComponent } from './char-d.component';

describe('CharDComponent', () => {
  let component: CharDComponent;
  let fixture: ComponentFixture<CharDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
