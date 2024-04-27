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