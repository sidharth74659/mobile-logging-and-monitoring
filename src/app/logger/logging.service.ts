import { Injectable } from '@angular/core';
import { ILoggingService } from './logging.interface';
import BUSINESS_CONFIG from 'business.config';
import { LoggingServiceEnum } from 'global.enums';
import { SentryLoggingService } from './sentry/sentry-logging.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService implements ILoggingService {

  loggingService: LoggingServiceEnum = BUSINESS_CONFIG.loggingService
  constructor(
    private sentryLoggingService: SentryLoggingService
  ) { }

  info(message: string, ...optionalParams: any[]): void {
    console.log(message, optionalParams);

    if (this.loggingService === LoggingServiceEnum.Sentry) {
      this.sentryLoggingService.logInfo(message, optionalParams);
    }
  }

  error(message: string, ...optionalParams: any[]): void {
    console.error(message, optionalParams);

    if (this.loggingService === LoggingServiceEnum.Sentry) {
      this.sentryLoggingService.logException(new Error(message), optionalParams);
    }
  }

  debug(message: string, ...optionalParams: any[]): void {
    console.debug(message, optionalParams);
  }

  warn(message: string, ...optionalParams: any[]): void {
    console.warn(message, optionalParams);
  }

  logException(error: Error, ...optionalParams: any[]): void {
    console.error(error, optionalParams);

    if (this.loggingService === LoggingServiceEnum.Sentry) {
      this.sentryLoggingService.logException(error, optionalParams);
    }
  }
}
