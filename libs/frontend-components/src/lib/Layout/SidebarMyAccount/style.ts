import { alpha, SxProps, Theme } from '@material-ui/system';

export default () =>
  ({
    '&.sidebar': {
      minHeight: '300px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      '.sidebar-header': {
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '.customer-avatar': {
          transform: 'translate3d(0, -25px, 0)',
          width: '57px',
          height: '57px',
          background: (theme) => theme.palette.secondary.main,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '.MuiTypography-root': {
            fontSize: '1.8em',
            fontWeight: 'bold',
          },
        },
        '.customer-name': {
          fontSize: '1.2em',
          fontWeight: 'bold',
        },
      },
      '.sidebar-navigator': {
        flex: 1,
        padding: '45px 0px',
        ul: {
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          li: {
            transition: '.3s',
            position: 'relative',
            height: '55px',
            paddingLeft: '45px',
            '&:after': {
              transition: '.3s',
              display: 'block',
              content: '""',
              width: '7px',
              height: '100%',
              position: 'absolute',
              right: 0,
              top: 0,
              opacity: 0,
              background: (theme) => theme.palette.primary.main,
            },
            '&:hover, &.active': {
              background: (theme) => alpha(theme.palette.primary.main, 0.08),
              '&:after': {
                opacity: 1,
              },
            },
            a: {
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              color: '#343434',
            },
          },
        },
      },
      '.sidebar-footer': {
        marginTop: '45px',
        padding: '20px 10px',
        textAlign: 'center',
      },
    },
  } as SxProps<Theme>);
