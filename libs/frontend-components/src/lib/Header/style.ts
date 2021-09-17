import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

type HeaderStyle = {
  [key: string]: SxProps<Theme>;
};

const boxShadow = (theme: Theme) =>
  `2px 2px 10px -5px ${theme.palette.secondary.main}`;

const heightBannerTop = {
  xs: '30px',
  md: '40px',
};

export default {
  header: {
    zIndex: 99,
    width: '100%',
    height: 'auto',
    background: '#FFF',
    position: 'fixed',
    top: 0,
    left: 0,
    transition: '.3s',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    '&.hide-banner-top': {
      transform: {
        md: `translate3d(0, -${heightBannerTop.md}, 0)`,
        xs: `translate3d(0, -${heightBannerTop.xs}, 0)`,
      },
    },
    '.header-banner-top': {
      width: '100%',
      background: (theme) => theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFF',
      height: heightBannerTop,
      fontSize: {
        xs: '12px',
        md: '16px',
      },
    },
  },

  headerNavigator: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: {
      md: '0px',
      xs: '3.5px 15.5px',
    },
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

        img: {
          width: {
            md: '100%',
            xs: '107px',
          },
        },
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
    alignItems: 'center',
    position: {
      xs: 'relative',
      md: 'relative',
    },
    display: {
      xs: 'none',
      md: 'flex',
    },

    '&.navigator-links-mobile': {
      height: '100%',
      width: '100%',
      maxWidth: '300px',
      zIndex: 9,
      left: 0,
      display: {
        md: 'none',
        xs: 'flex',
      },
      position: 'fixed',
      background: '#FFF',
      alignItems: 'flex-start',

      ul: {
        position: 'relative',
        width: '100%',
        listStyle: 'none',
        padding: 0,
        margin: 0,

        li: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: '60px',
          paddingLeft: '30px',
          userSelect: 'none',
          a: {
            userSelect: 'none',
            minWidth: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            '&:hover': {
              border: 'none',
            },
          },
          '&:hover': {
            border: 'none',
            '&:before': {
              background: (theme) => theme.palette.primary.light,
            },
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            display: 'block',
            width: '30px',
            height: '60px',
            marginRight: '0',
            left: 0,
            background: '#FFF',
          },
        },
      },
    },

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
    maxWidth: {
      md: '230px',
      xs: '100%',
    },
    flex: 1,

    ul: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: {
        md: 'space-around',
        xs: 'flex-end',
      },
      li: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 15px',
        cursor: 'pointer',
        transition: '.3s',
        borderRadius: '50%',
        padding: '3px',
        userSelect: 'none',

        '&:hover, &:active': {
          boxShadow,
        },
        '&.myaccount svg, &.bag img': {
          width: '30px',
          height: '30px',
          color: '#333',
        },
        '&.points': {
          position: 'relative',
          fontSize: '12px',
          color: '#343434',
          width: '36px',
          height: '36px',
          border: (theme) => `solid 2px ${theme.palette.primary.main}`,
          display: {
            md: 'flex',
            xs: 'none',
          },
          '&::after': {
            left: '2px',
            position: 'absolute',
            content: '""',
            display: 'block',
            boxShadow: (theme) =>
              `0px 0px 3px 0px ${theme.palette.primary.main}`,
            width: '90%',
            height: '90%',
            borderRadius: '50%',
          },
        },

        '&.bag': {
          boxSizing: 'border-box',
          padding: '5px',
        },

        '&.myaccount': {
          display: {
            md: 'flex',
            xs: 'none',
          },
        },

        '&.menu-mobile': {
          margin: '0 0  0 25px',
          '&:hover, &:active': {
            boxShadow: 'none',
          },
          display: {
            md: 'none',
            xs: 'flex',
          },
        },

        '.MuiBadge-badge': {
          top: '25px',
          boxShadow,
        },
      },
    },
  },

  drawer: {
    display: { xs: 'block', lg: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: '300px',
    },
  },
} as HeaderStyle;
