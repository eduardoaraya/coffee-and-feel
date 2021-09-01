import { SxProps, Theme } from '@material-ui/system';

type HomePageStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  homePage: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f2e9',
    backgroundImage: `url(/imgs/bg_default.svg)`,
  },
  subscriptionBox: {
    width: '100%',
    height: 'auto',
    padding: {
      md: '153px 0px',
      xs: '55px 0px',
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
      '&.right': {
        top: 'calc(594px + 6px)',
        right: '0',
        img: {
          position: 'absolute',
          right: {
            md: '-60px',
            xs: '-10px',
          },
        },
      },
    },

    '.section-title': {
      height: '125px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '475px',
      margin: '0 auto',
      textAlign: 'center',
      padding: {
        md: '10px',
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
      padding: '45px 65px',
      justifyContent: 'center',
      '.card': {
        minWidth: '200px',
        flex: 1,
        margin: {
          md: '30px',
          xs: '10px',
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
          p: {
            fontSize: {
              md: '1.5em',
              xs: '1em',
            },
            textAlign: 'center',
            color: '#737373',
          },
        },
      },
    },
  },
} as HomePageStyle;
