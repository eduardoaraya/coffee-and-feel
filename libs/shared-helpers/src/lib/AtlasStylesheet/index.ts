import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StylesheetHandler = (...args: any[]) => SxProps<Theme>;

type ThemeCSSProperties = {
  [key: string]: SxProps<Theme> | StylesheetHandler;
};

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type PartialRecord<K extends keyof never, T> = {
  [P in K]?: T;
};

// I would rather not use this since it absolutely tanks vscode typescript's server perfomance
export type AtlasJSSDeep<
  T extends
    | typeof AtlasStylesheet['create']
    | ReturnType<(...args: unknown[]) => typeof AtlasStylesheet['create']>
> = DeepPartial<Record<keyof DeepPartial<ReturnType<T>>, SxProps<Theme>>>;

export type AtlasJSSShallow<T extends ThemeCSSProperties> = PartialRecord<
  keyof T,
  SxProps<Theme>
>;

export class AtlasStylesheet {
  public static create<Styles extends ThemeCSSProperties>(
    styles: Styles
  ): Styles {
    return styles;
  }
}

export default AtlasStylesheet;
