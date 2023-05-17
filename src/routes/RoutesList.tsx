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

    </Routes>
  );
};

export default RoutesList;
