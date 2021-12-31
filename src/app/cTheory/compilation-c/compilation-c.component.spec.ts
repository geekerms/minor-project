import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationCComponent } from './compilation-c.component';

describe('CompilationCComponent', () => {
  let component: CompilationCComponent;
  let fixture: ComponentFixture<CompilationCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilationCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilationCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
