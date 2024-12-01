import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDayOffComponent } from './request-day-off.component';

describe('RequestDayOffComponent', () => {
  let component: RequestDayOffComponent;
  let fixture: ComponentFixture<RequestDayOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDayOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
