import { SxProps, Theme } from '@material-ui/system';

const swiperStyleOveride = (): SxProps<Theme> => ({
  '.swiper-container': {
    height: '100%',
    '.swiper-button-next, .swiper-button-prev': {
      display: 'none !important',
    },
    '.swiper-pagination-bullets': {
      top: '25px',
      bottom: 'inherit',
      '.swiper-pagination-bullet': {
        width: '10px',
        height: '10px',
        margin: '0 7px',
        opacity: 1,
        background: '#FFF',
        '&.swiper-pagination-bullet-active': {
          background: (theme) => theme.palette.primary.main,
        },
      },
    },
  },
});

export default {
  root: {
    // Swiper style overide
    ...swiperStyleOveride(),
    position: 'relative',
    zIndex: 2,
    maxWidth: '1030px',
    display: {
      md: 'block',
      xs: 'none',
    },
    height: {
      md: '544px',
      sm: 'auto',
      xs: 'auto',
    },
    margin: '25px auto',
    borderRadius: '22px',
    background: (theme) => theme.palette.secondary.main,
    boxShadow: {
      md: `0px 4px 4px rgba(145, 104, 76, 0.15)`,
      xs: 'none',
    },
    '.slide-button.MuiIconButton-root': {
      zIndex: 9,
      background: '#FFF',
      top: 'calc(544px/2)',
      position: 'absolute',
      '&.prev': {
        left: '-24px',
      },
      '&.next': {
        right: '-24px',
      },
    },
    '.product-wrapper': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    '.product-catalog-item': {
      background: 'transparent',
      margin: '0 auto',
      width: '100%',
      maxWidth: '800px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      '.product-image': {
        figure: {
          maxWidth: '300px',
          margin: '0 auto',
        },
      },
      '.product-info': {
        padding: 0,
        '.MuiTypography-root': {
          color: '#FFF',
        },
      },
    },
    '&.mobile-version': {
      display: {
        md: 'none',
        xs: 'block',
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
