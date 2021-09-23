import { SxProps, Theme } from '@material-ui/system';

export const getDefaultStyle = (time = 1000) =>
  ({
    padding: '5rem 0',
    background: (theme) => theme.palette.secondary.main,
    '.service-content': {
      width: '100%',
      height: '100%',
      padding: '2.5rem 0',
      '.service-row': {
        width: '100%',
        display: 'flex',
        padding: '4.5rem 0',
      },

      '.service-content-scroll': {
        minWidth: '320px',
        maxHeight: '500px',
        width: '100%',
        padding: '2rem 0 2rem 3.5rem',
        overflow: 'hidden',
        '.service-description': {
          transition: '.3s',
          display: 'flex',
          flexDirection: 'column',
          '.service-description-box': {
            display: 'block',
            transition: '1s',
            opacity: 0,
            '&.active': {
              opacity: 1,
            },
            '.service-description-text': {
              fontSize: '1em',
              lineHeight: '1.8em',
              marginBottom: '32px',
            },
          },
        },
      },

      '.tabs': {
        width: '100%',
        padding: '2rem 3.5rem 2rem 0',
        display: 'flex',
        flexDirection: 'column',
        '.tab-item': {
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: '1.7rem',
          position: 'relative',
          userSelect: 'none',
          transition: '.3s',
          ':hover': {
            boxShadow: 2,
          },
          ':before': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '4px',
            background: '#FFF',
            position: 'absolute',
            bottom: 0,
            left: 0,
            borderRadius: '12px',
          },
          ':after': {
            transition: '0s',
            content: '""',
            display: 'block',
            width: 0,
            height: '4px',
            background: (theme) => theme.palette.primary.main,
            position: 'absolute',
            bottom: 0,
            left: 0,
            borderRadius: '12px',
          },
          '&.active': {
            ':after': {
              transition: `${time / 1000}s linear`,
              width: '100%',
            },
            '.MuiTypography-root, .icon': {
              color: (theme) => theme.palette.primary.main,
            },
          },

          '.icon': {
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          },
          '.MuiTypography-root': {
            padding: '1rem 1.5rem',
          },
        },
      },
    },
  } as SxProps<Theme>);
