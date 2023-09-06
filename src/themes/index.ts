/* eslint-disable */
import { createTheme } from '@mui/material';

// assets
// import colors from 'assets/scss/_themes-vars.module.scss';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

// TODO: remove any prop type (Irving)
export const theme = (customization: any) => {
  const themeOption = {
    heading: '#121926',
    paper: '#ffffff',
    backgroundDefault: '#ffffff',
    background: '#eef2f6',
    darkTextPrimary: '#364152',
    darkTextSecondary: '#697586',
    textDark: '#121926',
    menuSelected: '#5e35b1',
    menuSelectedBack: '#ede7f6',
    divider: '#e3e8ef',
    customization,
  };

  // TODO: remove any prop type (Irving)
  const themeOptions: any = {
    direction: 'ltr',
    palette: themePalette(),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption),
  };
  console.log(themeOptions);
  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};
