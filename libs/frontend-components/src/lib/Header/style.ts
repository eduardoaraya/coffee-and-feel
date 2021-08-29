import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

type HeaderStyle = {
  [key: string]: SxProps<Theme>;
};

const boxShadow = (theme: Theme) =>
  `2px 2px 10px -5px ${theme.palette.secondary.main}`;

export default {
  header: {
    width: '100%',
    height: 'auto',
    background: '#FFF',
    position: 'fixed',
    boxShadow,
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
    padding: '16px 0px',
    boxSizing: 'border-box',
    '.logo': {
      paddingRight: '26.5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      a: {
        lineHeight: '0',
        padding: 0,
        margin: 0,
      },
    },

    '.navigator-links ul, .navigator-customer ul': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
    },
    '.navigator-links ul li, .navigator-customer ul li': {
      margin: '0 5px',
    },
  },

  navigatorLinks: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    'ul li': {
      minWidth: '100px',
      a: {
        transition: '.3s',
        textDecoration: 'none',
        fontWeight: 500,
        color: '#333',
        fontSize: '16px',
        padding: '5px 7.5px',
        borderBottom: (theme) => `solid 2px transparent`,
        '&.active, &:hover': {
          borderBottom: (theme) => `solid 2px ${theme.palette.primary.main}`,
        },
      },
    },
  },

  navigatorCustomer: {
    maxWidth: '230px',
    flex: 1,

    ul: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      li: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 15px',
        cursor: 'pointer',
        transition: '.3s',
        borderRadius: '50%',
        padding: '3px',
        '&:hover, &:active': {
          boxShadow,
        },
        '&.myaccount svg, &.bag img': {
          width: '30px',
          height: '30px',
          color: '#333',
        },
        '&.points': {
          fontSize: '12px',
          color: '#343434',
          width: '36px',
          height: '36px',
          border: (theme) => `solid 2px ${theme.palette.primary.main}`,
        },
        '&.bag': {
          boxSizing: 'border-box',
        },

        '.MuiBadge-badge': {
          top: '25px',
          boxShadow,
        },
      },
    },
  },
} as HeaderStyle;
