import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import * as SentrySibling from "@sentry/angular-ivy";
import * as Sentry from "@sentry/capacitor";

// Use @sentry/angular-ivy for Angular 12+ or `@sentry/angular` from Angular 10 and 11
import * as SentryAngular from "@sentry/angular-ivy";
import SENTRY_CONFIG from 'sentry.config';
import { HttpClientModule } from '@angular/common/http';


Sentry.init(
  SENTRY_CONFIG,
  // Forward the init method to the sibling Framework.
  SentryAngular.init
  // SentrySibling.init
);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: ErrorHandler,
      // Attach the Sentry ErrorHandler
      useValue: SentryAngular.createErrorHandler(),
    },
    {
      provide: SentryAngular.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => { },
      deps: [SentryAngular.TraceService],
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule { }
