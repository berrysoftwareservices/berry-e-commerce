import { CssBaseline } from '@mui/material';
import './App.css';
import NavigationScroll from '../../utils/NavigationScroll';
import { AppRoutes } from '../Routes/Routes';

function App() {
  return (
    <>
      <CssBaseline />
      <NavigationScroll>
        <AppRoutes />
      </NavigationScroll>
    </>
  );
}

export default App;
