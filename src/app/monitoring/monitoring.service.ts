import { Injectable } from '@angular/core';
import { IMonitoringService } from './monitoring.interface';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '../logger/logging.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService implements IMonitoringService {
  private metricsUrl = 'http://localhost:3001/metrics';  // URL to metrics endpoint
  private eventsUrl = 'http://localhost:3001/events';  // URL to events endpoint
  private exceptionsUrl = 'http://localhost:3001/exceptions';  // URL to exceptions endpoint

  constructor(
    private http: HttpClient,
    private logger: LoggingService
  ) { }

  trackEvent(eventName: string, eventProperties?: { [key: string]: any }): void {
    console.log(`Event: ${eventName}`, eventProperties);

    // Send event to the monitoring service
    this.sendEvent(eventName, eventProperties);
  }

  trackMetric(metricName: string, metricValue: number, metricProperties?: { [key: string]: any }): void {
    console.log(`Metric: ${metricName} - ${metricValue}`, metricProperties);

    // Send metric to the monitoring service
    this.sendMetric(metricName, metricValue, metricProperties);
  }

  trackException(exception: Error, exceptionProperties?: { [key: string]: any }): void {
    console.error(exception.message, exceptionProperties);
    const errorData = {
      message: exception.message,
      stack: exception.stack,
      // ... other relevant error information
    };
    // Send exception to the monitoring service
    this.sendException(exception, errorData);
  }

  private sendMetric(metricName: string, metricValue: number, metricLabels: any) {
    this.http.post(this.metricsUrl, { metricName, metricValue, metricLabels })
      .subscribe(
        () => this.logger.info('Metric sent successfully'),
        (error) => this.logger.error('Failed to send metric:', error)
      );
  }

  private sendEvent(eventName: string, eventProperties: any) {
    this.http.post(this.eventsUrl, { eventName, userId: 'user123', eventProperties })
      .subscribe(
        () => this.logger.info('Event sent successfully'),
        (error) => this.logger.error('Failed to send event:', error)
      );
  }

  private sendException(exception: Error, exceptionProperties: any) {
    this.http.post(this.exceptionsUrl, { exception, ...exceptionProperties })
      .subscribe(
        () => this.logger.info('Exception sent successfully'),
        (error) => this.logger.error('Failed to send exception:', error)
      );
  }

  getMetrics(): Observable<string> {
    return this.http.get(this.metricsUrl, { responseType: 'text' });
  }
}
