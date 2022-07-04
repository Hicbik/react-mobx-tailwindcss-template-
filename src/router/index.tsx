import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));

const AppRouters = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

export default AppRouters;
