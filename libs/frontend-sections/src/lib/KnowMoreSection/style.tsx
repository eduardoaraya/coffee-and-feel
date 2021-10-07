import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    position: 'relative',
    minHeight: {
      md: '650px',
      sm: 'auto',
    },
    '.section-content': {
      position: 'relative',
      zIndex: 1,
      padding: {
        md: '75px 0px',
        xs: '15px 20px',
      },
      maxWidth: {
        md: '550px',
        sm: '360px',
        xs: '240px',
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
        left: '30px',
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
      img: {
        width: {
          xl: '1270px',
          md: '970px',
          xs: '510.98px',
        },
        height: {
          xl: '1270px',
          md: '970px',
          xs: '510.98px',
        },
      },
      right: {
        xl: 'calc(-1270px/2)',
        md: 'calc(-970px/2)',
        xs: 'calc(-510.98px/1.7)',
      },
      top: {
        xl: 'calc(-1270px/3.5)',
        md: 'calc(-970px/3.5)',
        xs: 'calc(-510.98px/4)',
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
