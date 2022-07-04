import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouters from '@/router';

const App = () => (
  <React.Suspense fallback={<div />}>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </React.Suspense>
);

export default App;
