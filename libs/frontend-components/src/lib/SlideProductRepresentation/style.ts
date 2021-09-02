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
    '.MuiIconButton-root': {
      background: '#FFF',
      top: 'calc(544px/2)',
      position: 'absolute',
      '&.left': {
        left: '-24px',
      },
      '&.right': {
        right: '-24px',
      },
    },
  },
  gridProduct: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridAutoRows: 'auto',
    height: '100%',
    '.product-image': {
      gridColumn: '1/2',
      width: '400px',
      height: '400px',
    },
    '.product-info': {
      width: '100%',
      height: '100%',
    },
  },
  dotsList: {
    display: 'flex',
    flexDirection: 'row',
  },
} as SlideProductRepresentationType;
