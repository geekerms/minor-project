import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordCComponent } from './keyword-c.component';

describe('KeywordCComponent', () => {
  let component: KeywordCComponent;
  let fixture: ComponentFixture<KeywordCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
