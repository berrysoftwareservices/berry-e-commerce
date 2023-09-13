/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, FC } from 'react';
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';

// Material UI
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  Grid,
  InputAdornment,
  TextField,
  Popper,
  useTheme,
  styled,
} from '@mui/material';
import { shouldForwardProp } from '@mui/system';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

// Custom Components
import { Transitions } from '../../../../../Transitions/Transitions';

const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1100,
  width: '99%',
  top: '-55px !important',
  padding: '0 12px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
}));

const OutlineInputStyle = styled(TextField, { shouldForwardProp })(({ theme }) => ({
  width: 434,
  padding: '8px',
  marginLeft: '18px',
  '& input': {
    background: 'transparent !important',
  },
  [theme.breakpoints.down('lg')]: {
    width: 250,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 4,
    background: '#fff',
  },
}));

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
  // @ts-ignore
  ...theme.typography.commonAvatar,
  // @ts-ignore
  ...theme.typography.mediumAvatar,
  background: theme.palette.secondary.light,
  color: theme.palette.secondary.dark,
  '&:hover': {
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
  },
}));

interface MobileSearchProps {
  value: string;
  setValue: (value: string) => void;
  // popupState: PopupState;
}

const MobileSearch: FC<MobileSearchProps> = ({ value, setValue }) => {
  const theme = useTheme();

  return (
    <OutlineInputStyle
      id="input-search-header"
      value={value}
      size="small"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="info" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Box sx={{ ml: 2 }}>
              <ButtonBase sx={{ borderRadius: '12px' }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    // @ts-ignore
                    ...theme.typography.commonAvatar,
                    // @ts-ignore
                    ...theme.typography.mediumAvatar,
                    // @ts-ignore
                    background: theme.palette.orange.light,
                    // @ts-ignore
                    color: theme.palette.orange.dark,
                    '&:hover': {
                      // @ts-ignore
                      background: theme.palette.orange.dark,
                      // @ts-ignore
                      color: theme.palette.orange.light,
                    },
                  }}
                  // {...bindToggle(popupState)}
                >
                  <CloseIcon />
                </Avatar>
              </ButtonBase>
            </Box>
          </InputAdornment>
        ),
      }}
      aria-describedby="search-helper-text"
      inputProps={{ 'aria-label': 'weight' }}
    />
  );
};

export const SearchSection = React.memo(() => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <>
              <Box sx={{ ml: 2 }}>
                <ButtonBase sx={{ borderRadius: '12px' }}>
                  <HeaderAvatarStyle variant="rounded" {...bindToggle(popupState)}>
                    <SearchIcon />
                  </HeaderAvatarStyle>
                </ButtonBase>
              </Box>
              <PopperStyle {...bindPopper(popupState)} transition>
                {({ TransitionProps }) => (
                  <>
                    <Transitions type="zoom" {...TransitionProps} sx={{ transformOrigin: 'center left' }}>
                      <Card
                        sx={{
                          background: '#fff',
                          [theme.breakpoints.down('sm')]: {
                            border: 0,
                            boxShadow: 'none',
                          },
                        }}
                      >
                        <Box sx={{ p: 2 }}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs>
                              {/* <MobileSearch value={value} setValue={setValue} popupState={popupState} /> */}
                              <MobileSearch value={value} setValue={setValue} />
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Transitions>
                  </>
                )}
              </PopperStyle>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <OutlineInputStyle
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="info" />
              </InputAdornment>
            ),
          }}
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight' }}
        />
      </Box>
    </>
  );
});
