import { SxProps, Theme } from '@material-ui/system';

type HomePageStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  homePage: {
    overflow: 'hidden',
    top: '105px',
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f2e9',
    backgroundImage: `url(/imgs/bg_default.svg)`,
  },

  subscriptionSection: {
    positon: 'relative',
    zIndex: 9,
    width: '100%',
    minHeight: '900px',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: {
      md: 'url(/imgs/about-subscription-club.png)',
      xs: 'url(imgs/about-subscription-club-mobile.png)',
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      md: '0px 100px',
      xs: '0px 130px',
    },
    backgroundSize: {
      md: '35%',
      sm: '45%',
      xs: '263px',
    },
    padding: {
      md: '103px 0px',
      xs: '25px 0px',
    },

    '.avatar': {
      position: 'absolute',
      zIndex: -1,
      margin: 0,
      width: '300px',
      height: '300px',
    },

    '.wrapper': {
      padding: {
        md: '105px 0',
        xs: '15px 0px',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    '.section-info': {
      '.section-title': {
        lineHeight: {
          md: '46px',
          xs: '30px',
        },
        display: 'flex',
        justifyContent: {
          md: 'flex-start',
          xs: 'center',
        },
        margin: '0px',
        color: '#323232',
        textAlign: {
          md: 'left',
          xs: 'center',
        },
        padding: {
          md: '10px 0px',
          xs: '0px 0px 289.07px 0px',
        },
      },
      width: {
        md: '60%',
        xs: '100%',
      },
      padding: {
        md: '45px 0',
        xs: '45px 20px',
      },
      '.MuiButton-root': {
        display: 'block',
        margin: {
          md: '77px 0 0 0',
          xs: '0 auto',
        },
        alignSelf: 'center',
      },
      '.section-cards': {
        display: 'flex',
        justifyContent: 'center',
        margin: '75px 0px',
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
        '.card': {
          minWidth: '200px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          margin: {
            md: '0px',
            xs: '20px 0px',
          },
          '.MuiTypography-root': {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: {
              md: 'left',
              xs: 'center',
            },
          },
          '.card-description': {
            flex: 1,
            marginTop: '17.5px',
            textAlign: {
              md: 'left',
              xs: 'center',
            },
            'p.MuiTypography-root': {
              color: '#737373',
              fontSize: {
                md: '20px',
                xs: '16px',
              },
              fontWeight: 'normal',
              textTransform: 'initial',
            },
          },
        },
      },
    },
  },
  knowMoreSection: {
    position: 'relative',
    minHeight: '650px',
    '.section-content': {
      position: 'relative',
      zIndex: 1,
      padding: {
        md: '75px 0px',
        xs: '15px 20px',
      },
      maxWidth: {
        md: '550px',
        xs: '310px',
      },
      margin: {
        md: '0 auto',
        xs: '0',
      },
      textAlign: {
        md: 'center',
        xs: 'left',
      },
      'h1.MuiTypography-root': {
        lineHeight: {
          md: '46px',
          xs: '33px',
        },
      },
      'p.MuiTypography-root': {
        marginTop: '20px',
        lineHeight: {
          md: '32px',
          xs: '22px',
        },
        fontSize: {
          md: '20px',
          xs: '16px',
        },
      },
      'button.MuiButton-root': {
        marginTop: '5em',
      },
    },
    '.plant': {
      display: {
        md: 'block',
        xs: 'none',
      },
      position: 'absolute',
      width: '350px',
      height: '350px',
      img: {
        width: '100%',
      },
      '&.left': {
        left: '-50px',
        transform: 'rotate(-15.2deg)',
        img: {
          position: 'absolute',
          left: '-32px',
        },
      },
    },
    '.circlecoffee.right': {
      position: 'absolute',
      transform: 'rotate(180deg)',
      width: {
        md: '970px',
        xs: '510.98px',
      },
      height: {
        md: '970px',
        xs: '510.98px',
      },
      right: {
        md: 'calc(-970px/2)',
        xs: 'calc(-510.98px/1.7)',
      },
      top: {
        md: 'calc(-970px/3.5)',
        xs: 'calc(-510.98px/4)',
      },
    },
  },
  slideProductRepresentation: {
    padding: '35px 0px 105px 0px',
  },
} as HomePageStyle;
