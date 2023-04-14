import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplacesComponent } from './addplaces.component';

describe('AddplacesComponent', () => {
  let component: AddplacesComponent;
  let fixture: ComponentFixture<AddplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
