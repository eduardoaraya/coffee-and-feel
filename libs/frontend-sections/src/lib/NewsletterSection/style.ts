import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    zIndex: 2,
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
    '.newsletter-action': {
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
  },
} as {
  root: SxProps<Theme>;
};
