import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

type BannerStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  banner: {
    background: (theme) => theme.palette.secondary.main,
    width: '100%',
    height: '476px',
    position: 'relative',
    top: '112px',
  },
} as BannerStyle;
