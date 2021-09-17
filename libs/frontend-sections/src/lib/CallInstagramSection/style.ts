import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    minHeight: {
      md: '1000px',
      xs: 'auto',
    },
    position: 'relative',
    padding: '45px 0',
    '.section-description': {
      transition: '2.3s',
      position: 'relative',
      zIndex: 2,
      maxWidth: '500px',
      marginTop: {
        md: '250px',
        xs: '400px',
      },
      '&.active-animation': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
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
      '&:not(.mobile-photo)': {
        display: {
          md: 'block',
          xs: 'none',
        },
      },
      '&.mobile-photo': {
        position: 'absolute',
        display: {
          md: 'none',
          xs: 'block',
        },
        '&.top': {
          right: 0,
          top: 0,
          img: {
            width: '319px',
            height: '329px',
          },
        },
        '&.bottom': {
          top: '220px',
          right: '35px',
          img: {
            width: '127px',
            height: '155px',
          },
        },
      },
      '&.photo-mock': {
        position: 'absolute',
        top: -30,
        right: 142,
        zIndex: 1,
        '&.top': {
          top: 15,
          right: 145,
          img: {
            width: '227.01px',
            height: '276.46px',
          },
          '&.mobile-photo': {
            img: {
              width: '127px',
              height: '155px',
            },
          },
        },
        '&.bottom': {
          top: 'calc(537px/2)',
          right: '403px',
        },
      },
      '&.photo-one': {
        zIndex: 2,
        width: {
          md: '521.13px',
          xs: '319.46px',
        },
        height: {
          md: '537.92px',
          xs: '329.74px',
        },
        position: 'absolute',
        right: 160,
        top: 0,
      },
      '&.photo-two': {
        zIndex: 2,
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
          md: '190px',
          xs: '50px',
        },
        top: {
          md: 'calc(537.92px/1.3)',
          xs: 'calc(329.74px/1.3)',
        },
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
