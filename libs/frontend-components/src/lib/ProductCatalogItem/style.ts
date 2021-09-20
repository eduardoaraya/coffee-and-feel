import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    cursor: 'pointer',
    transition: '.2s',
    position: 'relative',
    background: '#FFF',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 5px -1px rgba(52, 52, 52, 0.12)',
    padding: '25px',
    display: 'flex',
    marginBottom: '45px',
    '&:hover': {
      boxShadow: '2px 2px 15px -9px rgba(52, 52, 52, 0.62)',
    },
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    borderRadius: '17px',
    '.product-image': {
      minWidth: {
        lg: '406px',
        md: '300px',
        xs: '100%',
      },
    },
    '.product-info': {
      paddingLeft: '55px',
    },
    '&.product-catalog-item-mobile': {
      flexDirection: 'column',
      paddingTop: {
        md: '130px',
        xs: '90px',
      },
      marginTop: '195px !important',
      '.product-image': {
        minWidth: '100%',
        position: 'absolute',
        top: '-200px',
        left: 0,
      },
      '.product-info': {
        paddingLeft: 0,
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
