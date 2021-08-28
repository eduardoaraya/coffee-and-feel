import { useRoutes, Navigate, PartialRouteObject } from 'react-router-dom';
import React from 'react';
import DashboardLayout from './layout/Dashboard/Main';
import NotFound from './pages/NotFound/NotFound';
import LoggedOutLayout from './layout/LoggedOut.layout';
import Login from './pages/Login/Login';

export default function Router() {
  return useRoutes([dashboardRoutes, standardRoutes, notFoundRoute]);
}

const standardRoutes: PartialRouteObject = {
  path: '/',
  element: <LoggedOutLayout />,
  children: [
    { path: 'login', element: <Login /> },
    { path: '404', element: <NotFound /> },
    { path: '/', element: <Navigate to="/dashboard" /> },
    { path: '*', element: <Navigate to="/404" /> },
  ],
};

const notFoundRoute: PartialRouteObject = {
  path: '*',
  element: <Navigate to="/404" replace />,
};

const dashboardRoutes: PartialRouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to="/dashboard/app" replace />,
    },
    {
      path: '/app',
      element: <div></div>,
    },
  ],
};
