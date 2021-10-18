import {TestBed} from '@angular/core/testing';

import {FleetCardService} from './fleet-card.service';

describe('FleetCardService', () => {
  let service: FleetCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
