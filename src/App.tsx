import React from 'react';

import { Profile } from './components/Profile';
import { Sidebar } from './components/Sidebar/';
import { Portfolio } from './pages/Portfolio';

export function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
      <Portfolio />
    </div>
  );
}
