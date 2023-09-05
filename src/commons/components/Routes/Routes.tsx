import { Routes, Route } from 'react-router-dom';
import { MainContainer } from '../MainContainer/MainContainer';
// import { Dashboard } from '../Dashboard/Dashboard';

export const AppRoutes = () => (
  <Routes>
    <Route path="/*" element={<MainContainer />} />
  </Routes>
);
