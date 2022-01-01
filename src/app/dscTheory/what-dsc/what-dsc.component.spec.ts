import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDscComponent } from './what-dsc.component';

describe('WhatDscComponent', () => {
  let component: WhatDscComponent;
  let fixture: ComponentFixture<WhatDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
