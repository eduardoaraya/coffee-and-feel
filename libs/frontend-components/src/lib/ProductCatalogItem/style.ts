import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    background: '#FFF',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    padding: '25px',
    display: 'flex',
    marginBottom: '25px',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    borderRadius: '17px',
    '.product-image': {
      width: {
        md: '320px',
        xs: '100%',
      },
    },
    '.product-info': {
      paddingLeft: '55px',
    },
    '&.product-catalog-item-mobile': {
      flexDirection: 'column',
      '.product-image': {
        width: '100%',
      },
      '.product-info': {
        paddingLeft: 0,
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
