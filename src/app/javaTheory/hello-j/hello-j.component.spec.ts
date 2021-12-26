import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloJComponent } from './hello-j.component';

describe('HelloJComponent', () => {
  let component: HelloJComponent;
  let fixture: ComponentFixture<HelloJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
