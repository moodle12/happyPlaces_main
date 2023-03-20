import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplaceComponent } from './editplace.component';

describe('EditplaceComponent', () => {
  let component: EditplaceComponent;
  let fixture: ComponentFixture<EditplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
