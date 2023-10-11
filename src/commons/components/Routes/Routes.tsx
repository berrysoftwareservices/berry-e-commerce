import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainContainer } from '../MainContainer/MainContainer';
import { Login } from '../../Auth/Login/Login';

export const AppRoutes = React.memo(() => (
  <Routes>
    <Route path="/*" element={<MainContainer />} />
    <Route path="/login" element={<Login />} />
  </Routes>
));
