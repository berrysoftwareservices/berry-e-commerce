// Material UI
import { AppBar, Box, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Hooks

// Custom Components
import { Customization } from './components/Customization/Customization';
import { Header } from './components/Header/Header';

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
          {/* <Header  handleLeftDrawerToggle={handleLeftDrawerToggle} /> */}
          <Header handleLeftDrawerToggle={() => {}} />
        </Toolbar>
      </AppBar>
      <Customization />
    </Box>
  );
};
