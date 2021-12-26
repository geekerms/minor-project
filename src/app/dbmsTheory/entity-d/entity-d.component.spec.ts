import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDComponent } from './entity-d.component';

describe('EntityDComponent', () => {
  let component: EntityDComponent;
  let fixture: ComponentFixture<EntityDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
