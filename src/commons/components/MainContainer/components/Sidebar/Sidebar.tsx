import { FC } from 'react';

// Material UI
import { useTheme } from '@mui/material/styles';
import { Drawer, Stack, useMediaQuery } from '@mui/material';

// Custom Components
import { MenuList } from './components/MenuList/MenuList';
// import { LogoSection } from '../LogoSection/LogoSection';
// import { MenuCard } from './components/MenuCard/MenuCard';

// Constants
import { drawerWidth } from '../../../../constants';

interface SideBarProps {
  drawerOpen: boolean;
  drawerToggle: () => void;
}

export const Sidebar: FC<SideBarProps> = ({ drawerOpen, drawerToggle }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Stack
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? (drawerOpen ? drawerWidth : 'auto') : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <Stack height="100%">
          {/* <Stack sx={{ display: { xs: 'block', md: 'none' } }}>
        <Stack sx={{ p: 2, mx: 'auto' }}>
          <LogoSection />
        </Stack>
      </Stack> */}
          <Stack
            sx={{
              maxHeight: !matchUpMd ? 'calc(100vh - 76px)' : 'calc(100vh - 128px)',
              height: '100%',
              paddingLeft: '16px',
              paddingRight: '16px',
              overflowY: 'auto',
            }}
          >
            <MenuList />
            {/* <MenuCard /> */}
            {/* <Stack  direction= 'row' justifyContent="center" mt={2} mb={2}>
            <Chip label="0.0.1" disabled color="secondary" size="small" sx={{ cursor: 'pointer' }} />
          </Stack> */}
          </Stack>
        </Stack>
      </Drawer>
    </Stack>
  );
};
