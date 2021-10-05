import { SxProps, Theme } from '@material-ui/system';

export default () =>
  ({
    cursor: 'pointer',
    position: 'relative',
    background: '#FFF',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 5px -1px rgba(52, 52, 52, 0.12)',
    padding: '25px',
    display: 'flex',
    marginBottom: '45px',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
      transition: '.3s',
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
      figure: {
        position: 'relative',
        width: '100%',
        maxWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        img: {
          width: '100%',
        },
      },
    },
    '.product-info': {
      paddingLeft: '55px',
    },

    '&.product-catalog-item-mobile': {
      flexDirection: 'column',
      '.product-representation > *': {
        alignSelf: 'center',
      },
      '.product-image': {
        minWidth: '100%',
        figure: {
          maxWidth: '250px',
          margin: '0 auto',
        },
      },
      '.product-info': {
        paddingLeft: 0,
      },
    },
  } as SxProps<Theme>);
