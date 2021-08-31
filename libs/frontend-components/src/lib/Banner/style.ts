import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';
import { BannerEntityType } from './contracts/types';

type BannerStyle = {
  [key: string]: SxProps<Theme>;
} & {
  banner: (b: BannerEntityType | null) => SxProps<Theme>;
};

export default {
  wrapper: {
    background: (theme) => theme.palette.secondary.main,
    width: '100%',
    height: {
      md: '476px',
      xs: '250px',
    },
    position: 'relative',
  },

  banner: (banner) => ({
    position: 'absolute',
    transition: '1s',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    backgroundColor: (theme) => theme.palette.secondary.dark,
    backgroundImage: {
      md: `url('${banner?.link.desktop}')`,
      xs: `url('${banner?.link.mobile}')`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    '&.active': {
      opacity: 1,
    },
  }),
} as BannerStyle;
