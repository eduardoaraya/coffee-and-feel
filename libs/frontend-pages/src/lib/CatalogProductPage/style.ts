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
      '.product-attribute-row': {
        display: 'flex',
        flexDirection: 'row',
        padding: {
          md: '75px 45px',
          xs: '25px',
        },
        '.MuiPaper-root': {
          minWidth: '200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '20px',
          padding: '25px 0px',
          '>*': {
            margin: '10px 0',
          },
          svg: {
            width: '40px',
            height: '40px',
          },
          '.product-attribute-value': {
            fontSize: '2em',
            fontWeight: 'bold',
          },
        },
      },

      '.product-attribute-accordion': {
        margin: '0 auto',
        padding: {
          md: '105px 45px',
        },
      },
    },
  } as SxProps<Theme>);
