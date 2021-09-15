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
    backgroundColor: 'transparent',
    width: '100%',
    paddingBottom: '40px',
    minHeight: {
      md: '480px',
      xs: '250px',
    },
    position: 'relative',
    '.swiper-container': {
      overflow: 'visible',
      '.swiper-pagination': {
        bottom: '-40px',
        '&.swiper-pagination-bullets': {
          '.swiper-pagination-bullet': {
            width: '10px',
            height: '10px',
            margin: '0 7px',
            opacity: 1,
            background: (theme) => theme.palette.secondary.main,
            '&.swiper-pagination-bullet-active': {
              background: (theme) => theme.palette.primary.main,
            },
          },
        },
      },
    },
  },
  banner: (banner) => ({
    width: '100%',
    height: {
      md: '480px',
      xs: '250px',
    },
    backgroundColor: '#000',
    backgroundImage: {
      md: `url('${banner?.link.desktop}')`,
      xs: `url('${banner?.link.mobile}')`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
} as BannerStyle;
