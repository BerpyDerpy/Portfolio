import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

// To add a new project in the future, create a folder under pages/, write its component,
// and add one line here mapping the route path to the lazy-loaded component.
const ROUTES = {
  '/legal': React.lazy(() => import('./pages/legal')),
  '/kite': React.lazy(() => import('./pages/kite')),
  '/nozzle': React.lazy(() => import('./pages/nozzle')),
  '/tarmac': React.lazy(() => import('./pages/tarmac')),
  '/biosea': React.lazy(() => import('./pages/biosea')),
  '/magic': React.lazy(() => import('./pages/magic')),
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {Object.entries(ROUTES).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
