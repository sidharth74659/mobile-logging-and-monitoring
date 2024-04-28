import { TestBed } from '@angular/core/testing';

import { ElkLoggingService } from './elk-logging.service';

describe('ElkLoggingService', () => {
  let service: ElkLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElkLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
