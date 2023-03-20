import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookingsComponent } from './addbookings.component';

describe('AddbookingsComponent', () => {
  let component: AddbookingsComponent;
  let fixture: ComponentFixture<AddbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
