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
    width: '100%',
    height: 'auto',
    padding: {
      md: '103px 0px',
      xs: '25px 0px',
    },
    position: 'relative',
    overflow: 'hidden',
    '.plant': {
      position: 'absolute',
      padding: '0',
      margin: '0',
      img: {
        display: {
          md: 'block',
          xs: 'none',
        },
      },
      '&.left': {
        top: '105px',
        left: 0,
        transform: 'rotate(-25.2deg)',
        img: {
          position: 'absolute',
          left: '-32px',
        },
      },
    },

    '.section-title': {
      lineHeight: '46px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '475px',
      margin: '0 auto',
      textAlign: 'center',
      padding: {
        md: '45px 0px',
        xs: '0 55px',
      },
      color: '#323232',
    },

    '.section-info': {
      display: 'flex',
      flexDirection: {
        md: 'row',
        xs: 'columnn',
      },
      flexWrap: 'wrap',
      padding: '45px 25px',
      justifyContent: 'center',
      '.card': {
        minWidth: '200px',
        flex: 1,
        margin: {
          md: '30px',
          xs: '10px',
        },

        '.card-icon': {
          marginBottom: '20px',
        },
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 25px',
        figure: {
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.card-description': {
          flex: 1,
          marginTop: '20px',
          'p.MuiTypography-root': {
            textAlign: 'center',
            color: '#737373',
            fontSize: '20px',
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
      padding: '75px 0px',
      maxWidth: '550px',
      margin: '0 auto',
      textAlign: 'center',
      'h1.MuiTypography-root': {
        lineHeight: '46px',
      },
      'p.MuiTypography-root': {
        marginTop: '20px',
        lineHeight: '32px',
        fontSize: '20px',
      },
      'button.MuiButton-root': {
        marginTop: '25px',
      },
    },
    '.plant.right': {
      display: {
        md: 'block',
        xs: 'none',
      },
      position: 'absolute',
      width: '400px',
      height: '400px',
      top: '-210px',
      right: '-100px',
    },
    '.circlecoffee': {
      position: 'absolute',
      width: {
        md: '970px',
      },
      height: {
        md: '970px',
      },
      top: '-205px',
      left: 'calc(-970px/2)',
    },
  },
} as HomePageStyle;
