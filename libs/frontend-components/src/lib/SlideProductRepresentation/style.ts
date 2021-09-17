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
    zIndex: 2,
    maxWidth: '1030px',
    display: {
      md: 'block',
      xs: 'none',
    },

    height: {
      sm: '544px',
      xs: 'auto',
    },
    margin: '25px auto',
    borderRadius: '22px',
    background: (theme) => theme.palette.secondary.main,
    boxShadow: {
      md: `0px 4px 4px rgba(145, 104, 76, 0.15)`,
      xs: 'none',
    },
    position: 'relative',

    // Swiper style overide
    ...swiperStyleOveride(),

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

    '.product-grid': {
      position: 'relative',
      display: 'grid',
      gridAutoRows: 'auto',
      width: '100%',
      height: '100%',
      gridTemplateColumns: {
        md: '1fr 1fr',
        xs: '1fr',
      },
      '.product-image': {
        gridColumn: {
          sm: '1/2',
          xs: '1/4',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        figure: {
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '267.8px',
          height: '269px',
          img: {
            width: '100%',
            height: '100%',
          },
        },
      },
      '.product-area': {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridColumn: {
          sm: '2/3',
          xs: '1/4',
        },
        '.product-title': {
          marginTop: {
            md: 0,
            xs: '10px',
          },
          paddingRight: {
            md: '125px',
            xs: '0',
          },
        },
      },
    },
    '&.mobile-version': {
      display: {
        md: 'none',
        xs: 'block',
      },
      '.product-grid': {
        padding: '20px',
        boxSizing: 'border-box',
        '.product-area': {
          '.product-representation': {
            '.product-title': {
              padding: '20px 45px 20px 20px',
            },
            '.product-plans-options': {},
            '.product-price-info': {
              padding: '10px',
            },
            '.actions': {
              marginTop: '15px',
              justifyContent: 'center',
            },
          },
        },
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
