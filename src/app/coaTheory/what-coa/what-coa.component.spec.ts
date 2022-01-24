import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCoaComponent } from './what-coa.component';

describe('WhatCoaComponent', () => {
  let component: WhatCoaComponent;
  let fixture: ComponentFixture<WhatCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
