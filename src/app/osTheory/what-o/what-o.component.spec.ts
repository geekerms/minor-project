import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOComponent } from './what-o.component';

describe('WhatOComponent', () => {
  let component: WhatOComponent;
  let fixture: ComponentFixture<WhatOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
