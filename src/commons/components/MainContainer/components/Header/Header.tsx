/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';

// Material UI
import { Avatar, Box, ButtonBase, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Custom Components
import { SearchSection } from './components/SearchSection/SearchSection';
import { NotificationSection } from './components/NotificationSection/NotificationSection';
import { LogoSection } from '../LogoSection/LogoSection';
import { ProfileSection } from './components/ProfileSection/ProfileSection';

interface HeaderProps {
  handleLeftDrawerToggle: () => void;
}

export const Header: FC<HeaderProps> = React.memo(({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              // @ts-ignore
              ...theme.typography?.commonAvatar,
              // @ts-ignore
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <MenuIcon />
          </Avatar>
        </ButtonBase>
      </Box>

      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <NotificationSection />
      <ProfileSection />
    </>
  );
});
