import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypearrDscComponent } from './typearr-dsc.component';

describe('TypearrDscComponent', () => {
  let component: TypearrDscComponent;
  let fixture: ComponentFixture<TypearrDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypearrDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypearrDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
