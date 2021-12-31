import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCppComponent } from './what-cpp.component';

describe('WhatCppComponent', () => {
  let component: WhatCppComponent;
  let fixture: ComponentFixture<WhatCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatCppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
