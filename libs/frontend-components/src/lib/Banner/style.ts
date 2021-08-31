import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';
import { BannerType } from '@atlascode/coffee-front-components';

type BannerStyle = {
  [key: string]: SxProps<Theme>;
} & {
  banner: (b: BannerType | null) => SxProps<Theme>;
};

export default {
  wrapper: {
    background: (theme) => theme.palette.secondary.main,
    width: '100%',
    height: '476px',
    position: 'relative',
    top: '112px',
  },

  banner: (banner: BannerType | null): SxProps<Theme> => ({
    position: 'absolute',
    transition: '1s',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    background: (theme) =>
      banner ? `url('${banner.link}')` : theme.palette.primary.dark,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '&.active': {
      opacity: 1,
    },
  }),
} as BannerStyle;
