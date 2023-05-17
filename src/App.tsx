import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { RoutesList } from './routes';

import AuthWrapper from './components/AuthWrapper/AuthWrapper';

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <RoutesList />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
