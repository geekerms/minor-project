import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOComponent } from './type-o.component';

describe('TypeOComponent', () => {
  let component: TypeOComponent;
  let fixture: ComponentFixture<TypeOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
