import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#5d6d7c",
    },
    primary: {
      main: "#f15d3c",
    },
    background: {
      default: "#F1F6FA",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ["Iceland", "cursive"].join(","),
    button: {
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: 16,
        },
      },
    },
  },
});

export default theme;
