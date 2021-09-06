import { SxProps, Theme } from '@material-ui/system';

export type SlideProductRepresentationType = {
  [key: string]: SxProps<Theme>;
};

export default {
  wrapperSlide: {
    maxWidth: '1030px',
    height: '544px',
    margin: '25px auto',
    borderRadius: '22px',
    background: (theme) => theme.palette.secondary.main,
    boxShadow: `0px 4px 4px rgba(145, 104, 76, 0.15)`,
    position: 'relative',

    // Swiper style overide
    '.swiper-container': {
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
  },
  gridProduct: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridAutoRows: 'auto',
    height: '544px',
    '.product-image': {
      gridColumn: '1/2',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    '.product-area': {
      gridColumn: '2/3',
      width: '100%',
      height: '100%',
      paddingTop: '115px',

      '.product-title': {
        paddingRight: '125px',
      },
    },
  },
} as SlideProductRepresentationType;
