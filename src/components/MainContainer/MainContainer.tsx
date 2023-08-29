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

// Services

// Utils

// Constants

// Styles

export const MainContainer = () => {
  const theme = useTheme();

  // TODO: move this code to use zustand
  //  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  // const handleLeftDrawerToggle = () => {
  //   dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  // };

  const handleLeftDrawerToggle = () => {};
  const leftDrawerOpened = true;
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
          // transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
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
