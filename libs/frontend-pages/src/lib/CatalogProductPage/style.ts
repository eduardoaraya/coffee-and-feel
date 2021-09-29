import {} from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';

export default () =>
  ({
    position: 'relative',
    paddingTop: {
      md: '75px',
      xs: '45px',
    },
    '.plant': {
      zIndex: -1,
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      background: '#FFF',
      display: {
        md: 'block',
        xs: 'none',
      },
      '&.right': {
        width: '259.5px',
        height: '396.91px',
        top: 0,
        right: '-45px',
        transform: 'rotate(-20deg)',
        mask: 'url(/imgs/plant2.svg) no-repeat center',
      },
      '&.left': {
        width: '350px',
        height: '300px',
        left: '-75px',
        top: '48px',
        transform: 'rotate(109deg)',
        mask: 'url(/imgs/plant1.svg) no-repeat center',
      },
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
        width: '100%',
        maxWidth: {
          md: '500px',
          xs: '100%',
        },

        minWidth: '305px',
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          img: {
            width: '100%',
            maxWidth: {
              xs: '300px',
            },
          },
        },
      },
      '.product-info': {
        margin: '0 auto',

        paddingLeft: {
          xs: 0,
        },
        padding: {
          xs: '0 20px',
        },
        alignSelf: 'center',
        h1: {
          maxWidth: '280px',
          fontSize: {
            md: '1.8em',
            xs: '2.65em',
          },
        },
        '.product-info-row': {
          marginBottom: '25px',
          display: {
            md: 'block',
            xs: 'flex',
          },
          justifyContent: {
            xs: 'center',
          },
          alignItems: {
            xs: 'center',
          },
          maxWidth: {
            md: '260px',
            xs: '100%',
          },
          '&.product-price': {
            flexDirection: 'column',
          },
          '.product-amount': {
            display: 'flex',
            margin: '20px 0px',
          },
          '.product-price-total': {
            fontSize: '1.7em',
          },

          '&.product-actions': {
            button: {
              padding: '10px 25px',
              display: 'flex',
              justifyContent: 'space-between',
              svg: {
                marginRight: '10px',
                width: '30px',
                height: '30px',
              },
            },
          },
        },
      },
    },

    '.product-attributes': {
      '.overflow-top': {
        position: 'relative',
        zIndex: 9,
        transform: {
          lg: 'translate3d(0, calc(-319px/2), 0)',
          md: 'translate3d(0, calc(-419px/2), 0)',
          xs: 'translate3d(0, -120px, 0)',
        },
      },
      '.product-attributes-bg': {
        position: 'relative',
        background: (theme) => theme.palette.secondary.main,
        height: {
          lg: '319px',
          md: '419px',
          xs: 'calc(100%-150px)',
        },
        marginTop: {
          md: '105px',
          xs: '145px',
        },
      },
      '.product-attribute-row': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 2,
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
        '.MuiPaper-root': {
          padding: 0,
          boxShadow: '2px 2px 7px -3px rgba(52, 52, 52, 0.2)',
          '.MuiButtonBase-root': {
            borderBottom: '0.2px solid #DDD',
          },
          '&.Mui-expanded': {
            '.accordion-item-title': {
              '.MuiSvgIcon-root': {
                transform: 'rotate(180deg)',
              },
            },
          },
          '.MuiTypography-root': {},
        },
        padding: {
          md: '105px 95px',
          xs: '75px 0px',
        },
        '.accordion-item-title, .accordion-item-content': {
          maxWidth: '850px',
          margin: '0 auto',
          width: '100%',
          padding: '10px 10px',
        },
        '.accordion-item-title': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '.MuiSvgIcon-root': {
            transition: '.3s',
            width: {
              md: '40px',
              xs: '20px',
            },
            height: {
              md: '40px',
              xs: '20px',
            },
          },
          '.MuiTypography-root': {
            fontWeight: 'bold',
            color: '#323232',
          },
        },
        '.accordion-item-content': {
          paddingTop: '45px',
          '.MuiTypography-root': {
            marginBottom: '60px',
            lineHeight: '32px',
            textAlign: 'left',
          },
        },
      },
    },
  } as SxProps<Theme>);
