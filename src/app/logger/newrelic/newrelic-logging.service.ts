import { Injectable } from '@angular/core';

declare var newrelic: any;
@Injectable({
  providedIn: 'root'
})
export class NewrelicLoggingService {
  debug(message: string, ...optionalParams: any[]): void {
    console.debug(message, optionalParams);
    newrelic.addPageAction('DebugLog', { message, optionalParams });
  }

  info(message: string, ...optionalParams: any[]): void {
    console.info(message, optionalParams);
    newrelic.addPageAction('InfoLog', { message, optionalParams });
  }

  warn(message: string, ...optionalParams: any[]): void {
    console.warn(message, optionalParams);
    newrelic.addPageAction('WarnLog', { message, optionalParams }); 
  }

  error(message: string, ...optionalParams: any[]): void {
    console.error(message, optionalParams);
    newrelic.noticeError(message, optionalParams);
  }

  logException(error: Error, ...optionalParams: any[]): void {
    console.error(error);
    newrelic.noticeError(error, optionalParams);
  }
}