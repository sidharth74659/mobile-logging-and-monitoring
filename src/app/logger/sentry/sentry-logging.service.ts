import { Injectable } from '@angular/core';
import * as Sentry from "@sentry/angular";
@Injectable({
  providedIn: 'root'
})
export class SentryLoggingService {
  constructor() {
    // Initialize and bind the Sentry client
    // Sentry.init({ dsn: 'https://dd0693e0c123a16f5620415821ceb8a5@o4507151260385280.ingest.us.sentry.io/4507151261564928' });
  }

  logInfo(message: string, ...optionalParams: any[]): void {
    Sentry.captureMessage(message);
  }

  logException(error: Error, ...optionalParams: any[]): void {
    Sentry.captureException(error);
  }

  handleError(error: any): void {
    this.logException(error);
  }
}
