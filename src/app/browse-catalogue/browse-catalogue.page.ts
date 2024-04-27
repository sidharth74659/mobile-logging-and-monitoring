import { Component, OnInit } from '@angular/core';
import * as Sentry from "@sentry/capacitor";
import { LoggingService } from '../logger/logging.service';

Sentry.captureException("Test Captured Exception");
@Component({
  selector: 'app-browse-catalogue',
  templateUrl: './browse-catalogue.page.html',
  styleUrls: ['./browse-catalogue.page.scss'],
})
export class BrowseCataloguePage implements OnInit {

  constructor(
    private logger: LoggingService
  ) { }

  ngOnInit() {
    this.logger.info("Browse Catalogue Page Loaded");
    this.testErrorCase();
  }

  testErrorCase() {
    try {
      // Must be thrown after Sentry.init is called to be captured.
      throw new Error("Test Error");
    } catch (error) {
      this.logger.error("Test Error Case", error);
    }
  }

}
