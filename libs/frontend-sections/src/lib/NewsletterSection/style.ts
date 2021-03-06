import { red } from '@material-ui/core/colors';
import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    padding: '105px 0px',
    position: 'relative',
    '.content-newsletter': {
      position: 'relative',
      zIndex: 2,
      background: (theme) => theme.palette.secondary.main,
      maxHeight: {
        md: '401.71px',
        xs: 'auto',
      },
    },
    '.custom-shape-divider-bottom': {
      position: 'absolute',
      top: '-59px',
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      transform: 'rotate(180deg)',
      svg: {
        position: 'relative',
        display: 'block',
        width: 'calc(194% + 1.3px)',
        height: '59px',
        '.shape-fill': {
          fill: (theme) => theme.palette.secondary.main,
        },
      },
    },
    '.custom-shape-divider-top': {
      position: 'absolute',
      bottom: '-59px',
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      transform: 'rotate(0)',
      svg: {
        position: 'relative',
        display: 'block',
        width: 'calc(194% + 1.3px)',
        height: '59px',
        '.shape-fill': {
          fill: (theme) => theme.palette.secondary.main,
        },
      },
    },
    '.wrapper-newsletter': {
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
        img: {
          width: {
            md: '661px',
            xs: '361px',
          },
          height: {
            md: '642px',
            xs: '342px',
          },
        },
        transform: {
          md: 'translate3d(-150px, -180px, 0)',
          xs: 'translate3d(0px, -40px, 0)',
        },
      },
      '.section-content': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        transform: {
          md: 'translate3d(0, -130px, 0)',
          xs: 'translate3d(0, -50px, 0)',
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
