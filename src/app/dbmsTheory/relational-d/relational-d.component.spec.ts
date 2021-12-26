import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDComponent } from './relational-d.component';

describe('RelationalDComponent', () => {
  let component: RelationalDComponent;
  let fixture: ComponentFixture<RelationalDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationalDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
