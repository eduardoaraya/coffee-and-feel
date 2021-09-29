import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StylesheetHandler = (...args: any[]) => SxProps<Theme>;

type ThemeCSSProperties = {
  [key: string]: SxProps<Theme> | StylesheetHandler;
};

export class AtlasStylesheet {
  public static create<Styles extends ThemeCSSProperties>(
    styles: Styles
  ): Styles {
    return styles;
  }
}

export default AtlasStylesheet;
