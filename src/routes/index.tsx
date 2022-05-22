import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
);

export default RoutesPages;
