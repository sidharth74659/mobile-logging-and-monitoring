import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggingService } from '../logger/logging.service';
import { MonitoringService } from '../monitoring/monitoring.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private logger: LoggingService,
    private http: HttpClient,
    private monitoringService: MonitoringService
  ) { }

  makeAPICall() {
    // Sample GET API call to jsonplaceholder
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (response) => this.logger.info('GET request successful'),
        (error) => this.logger.error('GET request failed:', error)
      );

    // Sending metric to the updated /metrics route
    const metricValue = 456;
    const metricLabels = { endpoint: "/api/products", method: "GET" };
    this.monitoringService.trackMetric("my_metric", metricValue, metricLabels);
  }
}
