import { Routes, Route } from 'react-router-dom';
import { MainContainer } from '../MainContainer/MainContainer';

export const AppRoutes = () => (
  <Routes>
    <Route path="/*" element={<MainContainer />} />
  </Routes>
);
