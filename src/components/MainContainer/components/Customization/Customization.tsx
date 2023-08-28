import { useState, useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

// Material UI
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  RadioGroup,
  Radio,
  Slider,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { IconSettings } from '@tabler/icons';

// Stores
import { useGeneralCustomizationStore } from '../../../../stores/useGeneralCustomizationStore';

// Custom Components
import PerfectScrollbar from 'react-perfect-scrollbar';

// concat 'px'
function valueText(value: number) {
  return `${value}px`;
}

export const Customization = () => {
  const theme = useTheme();
  const { currentFontFamily, borderRadius, opened, setCurrentFontFamily, setBorderRadius } =
    useGeneralCustomizationStore(
      (state) => ({
        currentFontFamily: state.fontFamily,
        borderRadius: state.borderRadius,
        opened: state.opened,
        setCurrentFontFamily: state.setFontFamily,
        setBorderRadius: state.setBorderRadius,
      }),
      shallow,
    );

  console.log(currentFontFamily);
  console.log(borderRadius);
  console.log(opened);

  // drawer on/off
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

  // // state - font family
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
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
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
          {/* <SettingsIcon /> */}
          hola
          <IconButton color="inherit" size="large" disableRipple></IconButton>
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
          <Grid container spacing={3} sx={{ p: 3 }}>
            <Grid item xs={12}>
              font family
              <FormControl>
                <RadioGroup
                  aria-label="font-family"
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Roboto"
                    control={<Radio />}
                    label="Roboto"
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] },
                    }}
                  />
                  <FormControlLabel
                    value="Poppins"
                    control={<Radio />}
                    label="Poppins"
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] },
                    }}
                  />
                  <FormControlLabel
                    value="Inter"
                    control={<Radio />}
                    label="Inter"
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {/* border radius */}
              <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
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
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};
