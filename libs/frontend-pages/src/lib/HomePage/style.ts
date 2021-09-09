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
  subscriptionClubDetailsSection: {
    padding: {
      md: '105px 0px',
      xs: '35px 20px',
    },
    '.title-section': {
      textAlign: 'center',
      maxWidth: '420px',
      margin: '0 auto',
      marginBottom: '85px',
    },
    '.subscription-details-wrapper': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexWrap: 'wrap',

      '.subscription-box-detail': {
        minWidth: '315px',
        margin: '10px 31px',
        background: '#FFFFFF',
        padding: '45px 20px',
        borderRadius: '16.6px',
        boxShadow: '0px 3.33333px 3.33333px 1.66667px rgba(137, 83, 227, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        '.title-box': {
          padding: '0 36px',
          'h3.MuiTypography-root': {
            fontSize: '20px',
            marginBottom: '14px',
          },
          'p.MuiTypography-root': {
            fontSize: '14px',
          },
        },
        a: {
          color: (theme) => theme.palette.primary.main,
          fontWeight: 'bolder',
          fontSize: '14px',
          textAlign: 'center',
        },
        '.check-list': {
          padding: '36px',
          li: {
            display: 'flex',
            alignItems: 'center',
            padding: '6px 0px',
            svg: {
              color: (theme) => theme.palette.success.main,
            },
            '>*': {
              margin: '0 10px',
            },
          },
        },
      },
    },
  },
  callInstagramSection: {
    minHeight: {
      md: '1000px',
      xs: 'auto',
    },
    position: 'relative',
    padding: '45px 0',
    '.section-description': {
      position: 'relative',
      zIndex: 2,
      maxWidth: '500px',
      marginTop: {
        md: '250px',
        xs: '400px',
      },
      '.section-title': {
        margin: '20px 0',
        fontSize: {
          md: '33px',
          xs: '20px',
        },
      },
      '.MuiTypography-body1': {
        fontSize: {
          md: '20px',
          xs: '14px',
        },
      },
    },
    '.insta-photo': {
      position: 'relative',
      '&.photo-one': {
        width: {
          md: '672px',
          xs: '319.46px',
        },
        height: {
          md: '729.56px',
          xs: '329.74px',
        },
        position: 'absolute',
        right: 0,
        top: 0,
      },
      '&.photo-two': {
        width: {
          md: '269.33px',
          xs: '127.56px',
        },
        height: {
          md: '328px',
          xs: '155.35px',
        },
        position: 'absolute',
        right: {
          md: '100px',
          xs: '50px',
        },
        top: {
          md: 'calc(729.56px/1.5)',
          xs: 'calc(329.74px/1.5)',
        },
      },
      '&.photo-three': {
        width: '216px',
        height: '263.06px',
        position: 'absolute',
        right: 'calc(672px/2 + 50px)',
        top: 'calc(263.06px*2.5)',
        display: {
          md: 'block',
          xs: 'none',
        },
      },
    },
  },
  newsletterSection: {
    background: (theme) => theme.palette.secondary.main,
    maxHeight: {
      md: '501.71px',
      xs: 'auto',
    },
    margin: '105px 0px',
    position: 'relative',
    '.wrapper-newslatter': {
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: {
        md: 'row',
        xs: 'column',
      },
      '.cupofcoffee': {
        position: 'relative',
        width: {
          md: '661px',
          xs: '361px',
        },
        height: {
          md: '642px',
          xs: '342px',
        },
        transform: {
          md: 'translate3d(-150px, -150px, 0)',
          xs: 'translate3d(0px, -150px, 0)',
        },
      },
      '.section-content': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        transform: {
          md: 'translate3d(0, -70px, 0)',
          xs: 'translate3d(0, -100px, 0)',
        },
        h1: {
          marginBottom: {
            md: '35px',
            xs: '10px',
          },
        },
      },
    },
  },
  newsletterInputSubscription: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '400px',
    marginTop: '20px',

    input: {
      flex: 1,
      height: '44px',
      outline: 'none',
      borderRadius: '10px 0 0 10px',
      background: '#FFF',
      padding: '0 5px',
      border: (theme) => `2px solid ${theme.palette.primary.main}`,
      '&::placeholder': {
        textIndent: '20px',
        color: (theme) => theme.palette.secondary.main,
      },
    },
    button: {
      borderRadius: '0 10px 10px 0',
      transform: 'translate3d(-2px, 0, 0)',
    },
  },
} as HomePageStyle;
