import { createTheme } from '@material-ui/core';

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
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

export default defaultTheme;
