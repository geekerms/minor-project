import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarNComponent } from './star-n.component';

describe('StarNComponent', () => {
  let component: StarNComponent;
  let fixture: ComponentFixture<StarNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
