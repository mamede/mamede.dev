import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Profile } from './components/Profile';
import { Sidebar } from './components/Sidebar/';
import RoutesPages from './routes';

export function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <Profile />
        <RoutesPages />
      </Router>
    </div>
  );
}
