import { TestBed } from '@angular/core/testing';

import { NewrelicLoggingService } from './newrelic-logging.service';

describe('NewrelicLoggingService', () => {
  let service: NewrelicLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewrelicLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
