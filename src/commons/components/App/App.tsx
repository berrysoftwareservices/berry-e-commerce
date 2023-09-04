import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';

// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';

// Custom Components
import { AppRoutes } from '../Routes/Routes';
import NavigationScroll from '../../../utils/NavigationScroll';

// Stores
import { useGeneralCustomizationStore } from '../../../stores/useGeneralCustomizationStore';

// Styles
import { theme } from '../../../themes';
import './App.css';

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
