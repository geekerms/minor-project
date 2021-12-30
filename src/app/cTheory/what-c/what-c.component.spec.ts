import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCComponent } from './what-c.component';

describe('WhatCComponent', () => {
  let component: WhatCComponent;
  let fixture: ComponentFixture<WhatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
