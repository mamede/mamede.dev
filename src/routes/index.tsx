import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';
import { Projects } from '../pages/Portfolio/projects';

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio/projects/teste" element={<Projects />} />
    {/* Abrir por :nome do projeto ^ ver como fazer na v6*/}
  </Routes>
);

export default RoutesPages;
