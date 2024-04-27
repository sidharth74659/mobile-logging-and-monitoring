import * as Sentry from "@sentry/capacitor";
import * as SentrySibling from "@sentry/angular-ivy";
import { environment } from "src/environments/environment";

// Configuration for Sentry
const SENTRY_CONFIG = {
  // release: "my-project-name@" + process.env["npm_package_version"],
  dsn: environment.sentry.dsn,
  release: environment.sentry.release,
  dist: environment.sentry.dist,
  tracesSampleRate: environment.sentry.tracesSampleRate,
  integrations: [
    new SentrySibling.BrowserTracing({
      routingInstrumentation: SentrySibling.routingInstrumentation,
      idleTimeout: 5000,
    }),
  ],
  tracePropagationTargets: [
    "localhost",
  ],
  //   autoPerformance: true,
};

export default SENTRY_CONFIG;

/* 
**Best Practices:**
  1. **DSN:** Always keep your DSN secret. It's like a password to your Sentry account.
  2. **Release and Dist:** These values are used for source map lookup. They should match the values used when uploading source maps.
  3. **Traces Sample Rate:** In production, you might want to lower this value to avoid consuming your quota too quickly.
  4. **Integrations:** Use the appropriate integration for your framework. For Angular, use `@sentry/angular`, for React, use `@sentry/react`, etc.
  5. **Trace Propagation Targets:** Use this to enable distributed tracing for specific URLs. Be careful not to include sensitive information in your traces.

**Tips and Tricks:**
  1. **Environment Variables:** Use environment variables to keep sensitive information like your DSN out of your code.
  2. **Source Maps:** Use source maps to get meaningful stack traces.
  3. **User Feedback:** Sentry can collect user feedback when an error occurs. This can provide valuable context for debugging.
  4. **Performance Monitoring:** Sentry can also monitor performance issues, not just errors. Use the `tracesSampleRate` option to enable this.

#### To manually record performance data, you can create a transaction:
```
  const transaction = Sentry.startTransaction({ name: "test-transaction" });
  const span = transaction.startChild({ op: "functionX" }); // This function can be any operation like a request, query, etc.
  // Call your function
  span.finish();
  transaction.finish();
```
*/