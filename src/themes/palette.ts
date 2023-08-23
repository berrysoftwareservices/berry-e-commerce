/* eslint-disable */
/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

// TODO: remove any prop type (Irving)
export default function themePalette() {
  return {
    common: {
      black: '#111936',
    },
    primary: {
      200: '#90caf9',
      800: '#1565c0',
      light: '#eef2f6',
      main: '#2196f3',
      dark: '#1e88e5',
    },
    secondary: {
      200: '#b39ddb',
      800: '#4527a0',
      light: '#ede7f6',
      main: '#673ab7',
      dark: '#5e35b1',
    },
    error: {
      light: '#ef9a9a',
      main: '#f44336',
      dark: '#c62828',
    },
    orange: {
      light: '#fbe9e7',
      main: '#ffab91',
      dark: '#d84315',
    },
    warning: {
      light: '#fff8e1',
      main: '#ffe57f',
      dark: '#ffc107',
    },
    success: {
      200: '#69f0ae',
      light: '#b9f6ca',
      main: '#00e676',
      dark: '#00c853',
    },
    grey: {
      50: '#f8fafc',
      100: '#eef2f6',
      500: '#697586',
      600: '#121926',
      700: '#364152',
      900: '#121926',
    },
    dark: {
      800: '#1a223f',
      900: '#111936',
      light: '#bdc8f0',
      main: '#29314f',
      dark: '#212946',
    },
    text: {
      primary: '#364152',
      secondary: '#697586',
      dark: '#121926',
      hint: '#eef2f6',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  };
}
