import { TestBed } from '@angular/core/testing';

import { SentryLoggingService } from './sentry-logging.service';

describe('SentryLoggingService', () => {
  let service: SentryLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentryLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
