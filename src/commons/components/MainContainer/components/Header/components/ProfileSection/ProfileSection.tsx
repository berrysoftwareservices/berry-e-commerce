import React, { useState, useRef } from 'react';
import { shallow } from 'zustand/shallow';

// Material UI
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  // Button,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  // IconButton,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

// Custom Components

// assets
import { Transitions } from '../../../../../Transitions/Transitions';
import UserImage from '../../../../../../../assets/images/users/user-round.svg';
import { useGeneralCustomizationStore } from '../../../../../../../stores/useGeneralCustomizationStore';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { UpgradePlanCard } from './components/UpgradePlanCard';
import { useGeneralSettingsStore } from '../../../../../../../stores/useGeneralSettingsStore';
// assets

export const ProfileSection = React.memo(() => {
  const [searchTextInput, setSearchTextInput] = useState('');
  const anchorRef = useRef(null);

  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const { borderRadius } = useGeneralCustomizationStore((state) => ({ borderRadius: state.borderRadius }));
  const { openProfileSettings, setOpenProfileSettings } = useGeneralSettingsStore(
    (state) => ({
      openProfileSettings: state.openProfileSettings,
      setOpenProfileSettings: state.setOpenProfileSettings,
    }),
    shallow,
  );

  return (
    <Box>
      <Box>
        <Chip
          sx={{
            height: '48px',
            alignItems: 'center',
            borderRadius: '27px',
            transition: 'all .2s ease-in-out',
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.light,
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: theme.palette.primary.main,
              background: `${theme.palette.primary.main}!important`,
              color: theme.palette.primary.light,
              '& svg': {
                stroke: theme.palette.primary.light,
              },
            },
            '& .MuiChip-label': {
              lineHeight: 0,
            },
          }}
          icon={
            <Avatar
              src={UserImage}
              sx={{
                // ...theme.typography.mediumAvatar,
                margin: '8px 0 8px 8px !important',
                cursor: 'pointer',
              }}
              ref={anchorRef}
              aria-controls={openProfileSettings ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              color="inherit"
            />
          }
          label={<SettingsIcon />}
          variant="outlined"
          ref={anchorRef}
          aria-controls={openProfileSettings ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={() => setOpenProfileSettings(true)}
          color="primary"
        />
      </Box>

      <Box>
        <Popper
          placement="bottom-end"
          open={openProfileSettings}
          anchorEl={anchorRef.current}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 14],
                },
              },
            ],
          }}
        >
          {({ TransitionProps }) => (
            <Transitions position={matchesXs ? 'top' : 'top-right'} in={openProfileSettings} {...TransitionProps}>
              <ClickAwayListener onClickAway={() => setOpenProfileSettings(false)}>
                <Paper elevation={5}>
                  <Box sx={{ p: 2 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Good Morning,</Typography>
                        <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                          Johne Doe
                        </Typography>
                      </Stack>
                    </Stack>
                    <TextField
                      sx={{ width: '100%', my: 2 }}
                      fullWidth
                      size="small"
                      value={searchTextInput}
                      onChange={(e) => setSearchTextInput(e.target.value)}
                      placeholder="Search profile options"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                      inputProps={{
                        'aria-label': 'weight',
                      }}
                    />
                    <Divider />
                  </Box>
                  <Stack sx={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                    <Box sx={{ p: 2 }}>
                      <UpgradePlanCard />
                      <Divider />
                      <Card
                        sx={{
                          bgcolor: theme.palette.primary.light,
                          my: 2,
                        }}
                      >
                        <CardContent sx={{ background: '#ddd0f5' }}>
                          <Grid container spacing={3} direction="column">
                            <Grid item>
                              <Grid item container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                  <Typography variant="subtitle1">Start DND Mode</Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    color="secondary"
                                    // checked={sdm}
                                    // onChange={(e) => setSdm(e.target.checked)}
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid item container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                  <Typography variant="subtitle1">Allow Notifications</Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    color="secondary"
                                    // checked={notification}
                                    // onChange={(e) => setNotification(e.target.checked)}
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      <Divider />
                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%',
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5,
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{ borderRadius: `${borderRadius}px` }}
                          // selected={selectedIndex === 0}
                          // onClick={(event) => handleListItemClick(event, 0, '#')}
                        >
                          <ListItemIcon>
                            <SettingsIcon />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: `${borderRadius}px` }}
                          onClick={() => setOpenProfileSettings(false)}
                        >
                          <ListItemIcon>
                            <PersonIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid container spacing={1} justifyContent="space-between">
                                <Grid item>
                                  <Typography variant="body2">Social Profile</Typography>
                                </Grid>
                                <Grid item>
                                  <Chip color="secondary" label="02" size="small" />
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: `${borderRadius}px` }}
                          onClick={() => setOpenProfileSettings(false)}
                        >
                          <ListItemIcon>
                            <LogoutIcon />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                        </ListItemButton>
                      </List>
                    </Box>
                  </Stack>
                </Paper>
              </ClickAwayListener>
            </Transitions>
          )}
        </Popper>
      </Box>
    </Box>
  );
});
