import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatNComponent } from './what-n.component';

describe('WhatNComponent', () => {
  let component: WhatNComponent;
  let fixture: ComponentFixture<WhatNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
