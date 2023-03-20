import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvendorsComponent } from './listvendors.component';

describe('ListvendorsComponent', () => {
  let component: ListvendorsComponent;
  let fixture: ComponentFixture<ListvendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
