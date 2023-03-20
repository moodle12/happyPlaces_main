import { TestBed } from '@angular/core/testing';

import { PlaceserviceService } from './placeservice.service';

describe('PlaceserviceService', () => {
  let service: PlaceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
