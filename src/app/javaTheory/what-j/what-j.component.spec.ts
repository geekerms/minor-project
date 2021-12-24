import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatJComponent } from './what-j.component';

describe('WhatJComponent', () => {
  let component: WhatJComponent;
  let fixture: ComponentFixture<WhatJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
