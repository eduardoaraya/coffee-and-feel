import {
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import defaultTheme from './theme';

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MaterialThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
}

export default ThemeProvider;
