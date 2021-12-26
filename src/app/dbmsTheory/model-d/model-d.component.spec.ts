import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDComponent } from './model-d.component';

describe('ModelDComponent', () => {
  let component: ModelDComponent;
  let fixture: ComponentFixture<ModelDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
