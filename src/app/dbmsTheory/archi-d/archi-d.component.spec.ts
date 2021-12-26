import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiDComponent } from './archi-d.component';

describe('ArchiDComponent', () => {
  let component: ArchiDComponent;
  let fixture: ComponentFixture<ArchiDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
