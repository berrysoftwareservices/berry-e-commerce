import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';

// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';

// Custom Components
import { NavigationScroll } from '../../utils/NavigationScroll';
import { Register } from '../../../pages/Auth/Register/Register';
import { MainPage } from '../../../pages/MainPage/MainPage';
import { Login } from '../../../pages/Auth/Login/Login';

// Custom Hooks
import { useAuthentication } from '../../hooks/useAuthentication.hook';

// Stores
import { useGeneralCustomizationStore } from '../../../stores/useGeneralCustomizationStore';

// Constants
import { amplifyConfig } from '../../utils/amplify/aws-config';

// Styles
import { theme } from '../../../themes';
import './App.css';

function App() {
  Amplify.configure(amplifyConfig);

  const { loggedUserData, isLoggedIn, loading } = useAuthentication();

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
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login loadingUserIsLogged={loading} />} />
            <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />
            <Route
              path="/*"
              element={<MainPage isLoggedIn={isLoggedIn} loggedUserData={loggedUserData} loading={loading} />}
            />
          </Routes>
        </NavigationScroll>
      </ThemeProvider>
    </>
  );
}

export default App;
