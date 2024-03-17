import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://8406e388f12f11c815cbda7184473386@o4506925946503168.ingest.us.sentry.io/4506925953974272",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
