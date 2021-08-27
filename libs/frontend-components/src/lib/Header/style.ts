import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

type HeaderStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  header: {
    w: '100%',
    h: '77px',
    background: '#FFF',
    position: 'fixed',
    '.header-banner-top': {
      w: '100%',
      h: '40px',
      background: (theme) => theme.palette.primary.main,
    },
  },
} as HeaderStyle;
