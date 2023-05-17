import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { RoutesList } from './routes';

import { AuthWrapper, NavBar } from './components';

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <NavBar />
        <RoutesList />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
