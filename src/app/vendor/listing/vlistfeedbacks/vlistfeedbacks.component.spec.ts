import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlistfeedbacksComponent } from './vlistfeedbacks.component';

describe('VlistfeedbacksComponent', () => {
  let component: VlistfeedbacksComponent;
  let fixture: ComponentFixture<VlistfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlistfeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlistfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
