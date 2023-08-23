/* eslint-disable */
/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

// TODO: remove any prop type (Irving)
export default function themeTypography(theme: any) {
  return {
    fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: '#121926',
      fontSize: '0.75rem',
    },
    h5: {
      fontSize: '0.875rem',
      color: '#121926',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      color: '#121926',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      color: '#121926',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      color: '#121926',
      fontWeight: 700,
    },
    h1: {
      fontSize: '2.125rem',
      color: '#121926',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#121926',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#697586',
    },
    caption: {
      fontSize: '0.75rem',
      color: '#697586',
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: '#364152',
    },
    button: {
      textTransform: 'capitalize',
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important',
      },
      '& legend': {
        display: 'none',
      },
      '& fieldset': {
        top: 0,
      },
    },
    mainContent: {
      backgroundColor: '#eef2f6',
      width: '100%',
      minHeight: 'calc(100vh - 88px)',
      flexGrow: 1,
      padding: '20px',
      marginTop: '88px',
      marginRight: '20px',
      borderRadius: `${theme?.customization?.borderRadius}px`,
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#121926',
      padding: '6px',
      textTransform: 'capitalize',
      marginTop: '10px',
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: '#697586',
      textTransform: 'capitalize',
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px',
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem',
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem',
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem',
    },
  };
}
