import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpipNComponent } from './tcpip-n.component';

describe('TcpipNComponent', () => {
  let component: TcpipNComponent;
  let fixture: ComponentFixture<TcpipNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcpipNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcpipNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
