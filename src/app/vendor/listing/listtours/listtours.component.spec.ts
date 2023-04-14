import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtoursComponent } from './listtours.component';

describe('ListtoursComponent', () => {
  let component: ListtoursComponent;
  let fixture: ComponentFixture<ListtoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
