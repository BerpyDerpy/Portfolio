import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import NotebookShell from './shell/NotebookShell.jsx';

// Cover loads eagerly (it's the landing). To add a new project later: create a
// folder under pages/, write its component, and add one <Route> line below.
import Cover from './pages/cover';

const ROUTES = {
  legal: React.lazy(() => import('./pages/legal')),
  kite: React.lazy(() => import('./pages/kite')),
  nozzle: React.lazy(() => import('./pages/nozzle')),
  tarmac: React.lazy(() => import('./pages/tarmac')),
  biosea: React.lazy(() => import('./pages/biosea')),
};

function NotFound() {
  return (
    <article style={{ fontFamily: 'var(--hand)', fontSize: 28 }}>
      <p>this page fell out of the binder.</p>
      <Link to="/">↩ back to the cover</Link>
    </article>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Every route renders inside the notebook shell (layout route). */}
      <Routes>
        <Route element={<NotebookShell />}>
          <Route index element={<Cover />} />
          {Object.entries(ROUTES).map(([slug, Component]) => (
            <Route
              key={slug}
              path={slug}
              element={
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
