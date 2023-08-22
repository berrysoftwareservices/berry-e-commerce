import { CssBaseline } from '@mui/material';
import './App.css';
import NavigationScroll from '../../utils/NavigationScroll';
import { AppRoutes } from '../Routes/Routes';

// defaultTheme
// import {themes} from 'themes';

function App() {
  // TODO: get this from zustand (Aderlin)
  // const customization = useSelector((state) => state.customization);
  return (
    <>
      {/* <ThemeProvider theme={themes(customization)}> */}
      <CssBaseline />
      <NavigationScroll>
        <AppRoutes />
      </NavigationScroll>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
