import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcontentComponent } from './vcontent.component';

describe('VcontentComponent', () => {
  let component: VcontentComponent;
  let fixture: ComponentFixture<VcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
