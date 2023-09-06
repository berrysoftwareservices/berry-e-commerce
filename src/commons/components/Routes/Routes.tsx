import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainContainer } from '../MainContainer/MainContainer';

export const AppRoutes = React.memo(() => (
  <Routes>
    <Route path="/*" element={<MainContainer />} />
  </Routes>
));
