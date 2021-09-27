import {} from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';

export default () =>
  ({
    paddingTop: {
      md: '75px',
      xs: '45px',
    },
    '.product': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: {
        md: '45px 0',
        xs: 0,
      },
      '.product-image, .product-info': {
        flex: 1,
        maxWidth: '500px',
        minWidth: '300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      },
      '.product-image': {
        position: 'relative',
        padding: '45px',
        figure: {
          height: '100%',
          width: '100%',
          img: {
            width: '100%',
          },
        },
      },
      '.product-info': {
        paddingLeft: {
          xs: 0,
        },
        alignSelf: 'center',
        h1: {
          maxWidth: '280px',
        },
        '.product-info-row': {
          marginBottom: '25px',
        },
      },
    },

    '.product-attributes': {
      '.product-attributes-bg': {
        position: 'relative',
        background: (theme) => theme.palette.secondary.main,
        height: {
          md: '419px',
          xs: 'auto',
        },
        marginTop: {
          md: '145px',
          xs: '45px',
        },
      },
      '.product-attribute-row': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 2,
        transform: {
          md: 'translate3d(0, calc(-419px/2), 0)',
          xs: 'translate3d(0, 0, 0)',
        },
        padding: {
          md: '75px 65px',
          xs: '25px',
        },
        '.separator': {
          margin: '10px auto',
        },
        '.product-attribute-item-box': {
          transition: '.3s',
          cursor: 'pointer',
          userSelect: 'none',
          boxShadow: '0px 2px 7px 2px rgba(137, 83, 227, 0.1)',
          background: '#FFF',
          width: '220px',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '20px',
          padding: '25px 0px',
          ':hover': {
            boxShadow: '0px 2px 1px 2px rgba(137, 83, 227, 0.1)',
          },
          '>*': {
            margin: '10px 0',
          },
          svg: {
            color: (theme) => theme.palette.secondary.main,
            width: '40px',
            height: '40px',
          },
          '.product-attribute-name': {
            textTransform: 'uppercase',
            fontWeight: 'bold',
          },
          '.product-attribute-value': {
            maxWidth: '120px',
            '&.t-size-1': {
              fontSize: '2em',
              fontWeight: 'bold',
            },
            '&.t-size-2': {
              fontSize: '1em',
            },
            textAlign: 'center',
          },
        },
      },

      '.product-attribute-accordion': {
        position: 'relative',
        zIndex: 2,
        margin: '0 auto',
        transform: {
          md: 'translate3d(0, calc(-419px/1.5), 0)',
          xs: 'translate3d(0, 0, 0)',
        },
        padding: {
          md: '105px 45px',
          xs: '75px 0px',
        },
      },
    },
  } as SxProps<Theme>);
