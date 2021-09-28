import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

type StylesheetHandler = (...args: unknown[]) => SxProps<Theme>;

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
