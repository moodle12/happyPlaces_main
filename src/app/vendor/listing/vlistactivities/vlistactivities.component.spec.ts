import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlistactivitiesComponent } from './vlistactivities.component';

describe('VlistactivitiesComponent', () => {
  let component: VlistactivitiesComponent;
  let fixture: ComponentFixture<VlistactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlistactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlistactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
