import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

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
        // input: {
        //   minWidth: '225px',
        // },

        root: {
          borderRadius: '12px',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          '&.MuiButton-sizeLarge': {
            padding: '15px 35px',
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
      fontSize: '16px',
      color: '#757575',
    },
  },
  palette: {
    primary: {
      main: '#8953E3',
    },
    secondary: {
      main: '#323232',
    },
  },
});

export default responsiveFontSizes(defaultTheme);
