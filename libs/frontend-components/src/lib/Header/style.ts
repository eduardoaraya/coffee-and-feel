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
  headerNavigator: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    '.navigator-links, .navigator-customer': {
      flex: 1,
    },
    '.navigator-links ul, .navigator-customer ul': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
    },
    '.navigator-links ul li, .navigator-customer ul li': {
      margin: '0 5px',
    },
    '.navigator-customer': {
      maxWidth: '300px',
    },
  },
} as HeaderStyle;
