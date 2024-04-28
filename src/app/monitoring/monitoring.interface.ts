import { Observable } from "rxjs";

export interface IMonitoringService {
  // The trackEvent method allows you to record occurrences of specific events, such as user actions or system events.
  trackEvent(eventName: string, eventProperties?: { [key: string]: any }): void;
  // The trackMetric method is used to track numerical performance metrics, such as page load times or API response times.
  trackMetric(metricName: string, metricValue: number, metricProperties?: { [key: string]: any }): void;
  // The trackException method captures and reports errors or exceptions that occur in your application.
  trackException(exception: Error, exceptionProperties?: { [key: string]: any }): void;
  // The getMetrics method retrieves performance metrics(also includes /events and /exceptions) from the monitoring service.
  getMetrics(): Observable<string>;
}