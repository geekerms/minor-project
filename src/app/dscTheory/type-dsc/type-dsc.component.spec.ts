import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDscComponent } from './type-dsc.component';

describe('TypeDscComponent', () => {
  let component: TypeDscComponent;
  let fixture: ComponentFixture<TypeDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
