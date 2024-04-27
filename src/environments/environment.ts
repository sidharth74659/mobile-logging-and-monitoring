// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
  production: false,

  // Configuration for Sentry
  sentry: {
    dsn: "https://dd0693e0c123a16f5620415821ceb8a5@o4507151260385280.ingest.us.sentry.io/4507151261564928",
    release: "my-project-name@" + "1.0.0",
    dist: "1",
    tracesSampleRate: 1.0,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
