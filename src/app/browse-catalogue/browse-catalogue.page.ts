import { Component, OnInit } from '@angular/core';
import * as Sentry from "@sentry/capacitor";
import { LoggingService } from '../logger/logging.service';
import { ApiService } from '../api/api.service';
import { MonitoringService } from '../monitoring/monitoring.service';

Sentry.captureException("Test Captured Exception");
@Component({
  selector: 'app-browse-catalogue',
  templateUrl: './browse-catalogue.page.html',
  styleUrls: ['./browse-catalogue.page.scss'],
})
export class BrowseCataloguePage implements OnInit {

  constructor(
    private logger: LoggingService,
    private apiService: ApiService,
    private monitoringService: MonitoringService,
  ) { }

  ngOnInit() {
    this.logger.info("Browse Catalogue Page Loaded");
    this.testTrackMetric();
    this.testTrackEvent();
    this.testTrackException();
    this.testErrorCase();
  }

  testErrorCase() {
    try {
      // Must be thrown after Sentry.init is called to be captured.
      throw new Error("Test Error 2");
    } catch (error) {
      this.monitoringService.trackException(error as Error, { exceptionProperty: "Test Property" });
      this.logger.error("Test Error Case 2", error);
    }
  }

  testTrackMetric() {
    this.apiService.makeAPICall();
  }

  testTrackEvent() {
    this.monitoringService.trackEvent("Test Event", { eventProperty: "Test Property" });
  }

  testTrackException() {
    try {
      throw new Error("Test Exception");
    } catch (error) {
      this.monitoringService.trackException(error as Error, { exceptionProperty: "Test Property" });
    }
  }
}
