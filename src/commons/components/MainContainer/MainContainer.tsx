import { useRef, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { useWindowHeight } from '@react-hook/window-size';

// Material UI
import { AppBar, Box, Stack, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Custom Components
import { Customization } from './components/Customization/Customization';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from '../../../pages/Dashboard/Dashboard';
import { PageInProgress } from '../../../pages/PageInProgress/PageInProgress';

// Stores
import { useGeneralCustomizationStore } from '../../../stores/useGeneralCustomizationStore';

export const MainContainer = () => {
  const theme = useTheme();
  const appBarRef = useRef<HTMLDivElement>(null);
  const [appBarHeight, setAppBarHeight] = useState(0);
  const windowHeight = useWindowHeight();
  const pageHeight = windowHeight - appBarHeight;

  useEffect(() => {
    setAppBarHeight(appBarRef?.current?.offsetHeight ?? 0);
  }, []);

  const { opened: leftDrawerOpened, setOpened } = useGeneralCustomizationStore(
    (state) => ({
      opened: state.opened,
      setOpened: state.setOpened,
    }),
    shallow,
  );

  const handleLeftDrawerToggle = () => {
    setOpened(!leftDrawerOpened);
  };

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', overflowY: 'auto' }}>
      <AppBar
        ref={appBarRef}
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Stack
        direction="row"
        p={2}
        sx={{
          width: '100%',
          height: pageHeight,
          position: 'absolute',
          top: appBarHeight,
          overflowY: 'auto',
          left: 0,
          bgcolor: '#eef2f6',
        }}
      >
        <Sidebar
          drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
          drawerToggle={handleLeftDrawerToggle}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<PageInProgress />} />
        </Routes>
      </Stack>
      <Customization />
    </Box>
  );
};
