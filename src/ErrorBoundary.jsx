import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const ErrorBoundaryWrapper = ({ children }) => (
  <ErrorBoundary FallbackComponent={FallbackComponent}>
    {children}
  </ErrorBoundary>
);

export default ErrorBoundaryWrapper;
