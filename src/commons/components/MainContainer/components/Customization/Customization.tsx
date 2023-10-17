import React, { useState, useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

// Material UI
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  Radio,
  Slider,
  Tooltip,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

// Custom Components
import PerfectScrollbar from 'react-perfect-scrollbar';
import { SubCard } from '../../../SubCard/SubCard';

// Stores
import { useGeneralCustomizationStore } from '../../../../../stores/useGeneralCustomizationStore';

// Constants
import { gridSpacing } from '../../../../constants';

function valueText(value: number) {
  return `${value}px`;
}

export const Customization = React.memo(() => {
  const theme = useTheme();
  const { currentFontFamily, borderRadius, setCurrentFontFamily, setBorderRadius } = useGeneralCustomizationStore(
    (state) => ({
      currentFontFamily: state.fontFamily,
      borderRadius: state.borderRadius,
      setCurrentFontFamily: state.setFontFamily,
      setBorderRadius: state.setBorderRadius,
    }),
    shallow,
  );

  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = useCallback(() => setOpen(!open), [open]);

  const handleBorderRadius = (_event: Event, newValue: number | number[]) => setBorderRadius(newValue as number);

  let initialFont;
  switch (currentFontFamily) {
    case `'Inter', sans-serif`:
      initialFont = 'Inter';
      break;
    case `'Poppins', sans-serif`:
      initialFont = 'Poppins';
      break;
    case `'Roboto', sans-serif`:
    default:
      initialFont = 'Roboto';
      break;
  }

  const [fontFamily, setFontFamily] = useState(initialFont);

  useEffect(() => {
    let newFont;
    switch (fontFamily) {
      case 'Inter':
        newFont = `'Inter', sans-serif`;
        break;
      case 'Poppins':
        newFont = `'Poppins', sans-serif`;
        break;
      case 'Roboto':
      default:
        newFont = `'Roboto', sans-serif`;
        break;
    }
    setCurrentFontFamily(newFont);
  }, [setCurrentFontFamily, fontFamily]);

  return (
    <Box>
      <Tooltip title="General Customize">
        <Fab
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          disableFocusRipple
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial,
          }}
        >
          <SettingsIcon
            sx={{
              animation: 'spin 2s linear infinite',
              '@keyframes spin': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
            }}
          />
        </Fab>
      </Tooltip>
      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              <SubCard title="Font Family" darkTitle content contentSX={{ marginLeft: '12px', marginTop: '12px' }}>
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Roboto"
                      control={<Radio color="secondary" />}
                      label="Roboto"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] },
                      }}
                    />
                    <FormControlLabel
                      value="Poppins"
                      control={<Radio color="secondary" />}
                      label="Poppins"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] },
                      }}
                    />
                    <FormControlLabel
                      value="Inter"
                      control={<Radio color="secondary" />}
                      label="Inter"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
            </Grid>
            <Grid item xs={12} mt={2.5}>
              <SubCard title="Border Radius" darkTitle content contentSX={{ marginLeft: '12px', marginTop: '12px' }}>
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ marginTop: 2.5 }}>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      4px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={borderRadius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </Box>
  );
});
