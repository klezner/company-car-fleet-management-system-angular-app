import {TestBed} from '@angular/core/testing';

import {CarWorkshopService} from './car-workshop.service';

describe('CarWorkshopService', () => {
  let service: CarWorkshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarWorkshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
