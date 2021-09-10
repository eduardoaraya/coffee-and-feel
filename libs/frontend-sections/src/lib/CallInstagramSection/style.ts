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
} as {
  root: SxProps<Theme>;
};
