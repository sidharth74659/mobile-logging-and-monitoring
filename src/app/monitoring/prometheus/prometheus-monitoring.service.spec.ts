import { TestBed } from '@angular/core/testing';

import { PrometheusMonitoringService } from './prometheus-monitoring.service';

describe('PrometheusMonitoringService', () => {
  let service: PrometheusMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrometheusMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
