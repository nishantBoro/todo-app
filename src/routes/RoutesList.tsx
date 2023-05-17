import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './PublicRoute'; 
import PrivateRoute from './PrivateRoute';

import { DashBoard, Login } from '../pages';

const RoutesList = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      >
      </Route>

      <Route 
        path="*" 
        element={
          <h1 style={{ textAlign: 'center', marginTop: '40px' }}>404 - Page Not Found</h1>
        } 
      />

    </Routes>
  );
};

export default RoutesList;
