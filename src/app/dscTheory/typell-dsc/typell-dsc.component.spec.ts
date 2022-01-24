import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypellDscComponent } from './typell-dsc.component';

describe('TypellDscComponent', () => {
  let component: TypellDscComponent;
  let fixture: ComponentFixture<TypellDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypellDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypellDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
