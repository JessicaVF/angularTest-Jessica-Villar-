import { TestBed } from '@angular/core/testing';

import { ApiIncidentService } from './api-incident.service';

describe('ApiIncidentService', () => {
  let service: ApiIncidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIncidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
