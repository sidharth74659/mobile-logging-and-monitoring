
interface ISENTRY_CONFIG {
    dsn: string;
    release: string;
    dist: "1";
    tracesSampleRate: 1.0;
}

export interface IEnvironment {
    production: boolean;
    sentry: ISENTRY_CONFIG;
}
