import { SxProps, Theme } from '@material-ui/system';

type HomePageStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  homePage: {
    position: 'relative',
    backgroundImage: 'url(./imgs/bg_default.png)',
    backgroundRepeat: 'repeat',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  subscriptionBox: {
    width: '100%',
    height: 'auto',
    padding: {
      md: '153px 0px',
      xs: '55px 0px',
    },
    minHeight: '1200px',
    position: 'relative',
    overflow: 'hidden',
    '.plant': {
      position: 'absolute',
      padding: '0',
      margin: '0',
      img: {
        width: {
          md: 'auto',
          xs: '100px',
        },
      },
      '&.left': {
        top: '45px',
        left: 0,
        img: {
          position: 'absolute',
          left: '-10px',
        },
      },
      '&.right': {
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
      fontSize: {
        md: '30px',
        xs: '22px',
      },
      fontWeight: '500',
      height: '125px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '375px',
      margin: '0 auto',
      textAlign: {
        md: 'center',
        xs: 'right',
      },
      padding: {
        md: '10px',
        xs: '0 55px',
      },
      color: '#323232',
      fontFamily: 'Rufina, serif',
    },

    '.section-info': {
      display: 'flex',
      flexDirection: {
        md: 'row',
        xs: 'columnn',
      },
      flexWrap: 'wrap',
      padding: '20px 45px',
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
