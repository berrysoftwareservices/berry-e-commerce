import { CssBaseline } from '@mui/material';
import './App.css';
import NavigationScroll from '../../utils/NavigationScroll';
import { MainContainer } from '../MainContainer/MainContainer';

function App() {
  return (
    <>
      <CssBaseline />
      <NavigationScroll>
        <MainContainer />
      </NavigationScroll>
    </>
  );
}

export default App;
