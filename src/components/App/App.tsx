import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';

import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import NavigationScroll from '../../utils/NavigationScroll';
import { AppRoutes } from '../Routes/Routes';
import { theme } from '../../themes';

import { useGeneralCustomizationStore } from '../../stores/useGeneralCustomizationStore';

function App() {
  const { fontFamily, borderRadius, opened } = useGeneralCustomizationStore(
    (state) => ({
      fontFamily: state.fontFamily,
      borderRadius: state.borderRadius,
      opened: state.opened,
    }),
    shallow,
  );
  const customization = useMemo(
    () => ({
      fontFamily,
      borderRadius,
      opened,
    }),
    [fontFamily, borderRadius, opened],
  );

  return (
    <>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <AppRoutes />
        </NavigationScroll>
      </ThemeProvider>
    </>
  );
}

export default App;
