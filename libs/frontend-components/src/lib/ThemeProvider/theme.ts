import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

const colors = {
  primary: '#8953E3',
  secondary: '#323232',
};

const titleStyle = (size: string): TypographyStyleOptions => ({
  fontSize: size,
  fontFamily: 'Rufina Bold, serif',
  fontStyle: 'normal',
  color: '#323232',
});

const defaultTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },

    MuiButtonGroup: {
      styleOverrides: {
        root: {
          '.MuiButton-root, &.MuiButtonGroup-root, &.MuiButtonGroup-grouped': {
            borderRadius: '4px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          '&.MuiButton-outlined': {
            borderWidth: '2px',
            '&.white-text': {
              color: '#FFF',
            },
          },
          '&.MuiButton-sizeLarge': {
            padding: '15px 45px',
            fontSize: '15px',
          },
          '&.MuiButton-sizeMedium': {
            padding: '10px 30px',
            fontSize: '14px',
          },
          '&.MuiButton-sizeSmall': {
            padding: '5px 25px',
            fontSize: '13px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: titleStyle('33px'),
    h2: titleStyle('26px'),
    h3: titleStyle('22px'),
    h4: titleStyle('18px'),
    h5: titleStyle('16px'),
    h6: titleStyle('12px'),
    body1: {
      color: '#757575',
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  // shadows: [
  //   ...(Array.from({ length: 23 }).map((_) => 'none') as Shadows),
  //   `0px 0px 3px 0px ${colors.secondary}`,
  // ],
});

export default responsiveFontSizes(defaultTheme);
