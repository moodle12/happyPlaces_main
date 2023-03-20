import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsreportComponent } from './bookingsreport.component';

describe('BookingsreportComponent', () => {
  let component: BookingsreportComponent;
  let fixture: ComponentFixture<BookingsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
