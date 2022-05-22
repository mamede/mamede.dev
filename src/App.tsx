import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Sidebar } from './components/Sidebar/';
import RoutesPages from './routes';

export function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <RoutesPages />
      </Router>
    </div>
  );
}
