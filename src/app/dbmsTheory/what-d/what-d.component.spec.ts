import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDComponent } from './what-d.component';

describe('WhatDComponent', () => {
  let component: WhatDComponent;
  let fixture: ComponentFixture<WhatDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
