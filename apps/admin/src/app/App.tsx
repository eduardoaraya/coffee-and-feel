import React from "react";
import { Box, ThemeProvider, CssBaseline } from "@material-ui/core";
import Router from "./routes";
import theme from "./theme";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Box>
  );
}

export default App;
