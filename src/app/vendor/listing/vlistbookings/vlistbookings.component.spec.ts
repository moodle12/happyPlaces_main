import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlistbookingsComponent } from './vlistbookings.component';

describe('VlistbookingsComponent', () => {
  let component: VlistbookingsComponent;
  let fixture: ComponentFixture<VlistbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlistbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlistbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
