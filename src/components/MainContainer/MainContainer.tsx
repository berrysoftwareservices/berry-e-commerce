import { shallow } from 'zustand/shallow';

// Material UI
import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Hooks

// Custom Components
import { Customization } from './components/Customization/Customization';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

// Custom Hooks

// Stores
import { useGeneralCustomizationStore } from '../../stores/useGeneralCustomizationStore';

// Services

// Utils

// Constants

// Styles

export const MainContainer = () => {
  const theme = useTheme();

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
    <Box sx={{ display: 'flex' }}>
      <AppBar
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
      <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
      <Customization />
    </Box>
  );
};
