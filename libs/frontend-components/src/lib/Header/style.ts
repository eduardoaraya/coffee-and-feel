import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

type HeaderStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  header: {
    width: '100%',
    height: '50px',
    background: '#FFF',
    position: 'fixed',
    '.header-banner-top': {
      width: '100%',
      height: '40px',
      background: (theme) => theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFF',
    },
  },
} as HeaderStyle;
