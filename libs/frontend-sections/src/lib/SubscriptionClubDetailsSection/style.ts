import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    padding: {
      md: '105px 0px',
      xs: '35px 20px',
    },
    position: 'relative',
    '.coffees': {
      display: {
        md: 'block',
        xs: 'none',
      },
      position: 'absolute',
      width: '224.08px',
      height: '907.78px',
      zIndex: 1,
      '&.left': {
        left: 0,
        top: 'calc(907.78px/3)',
      },
      '&.right': {
        top: 'calc(-907.78px/3)',
        right: 0,
        transform: 'rotate(180deg)',
      },
    },

    '.title-section': {
      textAlign: 'center',
      maxWidth: '420px',
      margin: '0 auto',
      marginBottom: '85px',
    },
    '.subscription-details-wrapper': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexWrap: 'wrap',

      '.subscription-box-detail': {
        zIndex: 2,
        minWidth: '315px',
        margin: '10px 31px',
        background: '#FFFFFF',
        padding: '45px 20px',
        borderRadius: '16.6px',
        boxShadow: '0px 3.33333px 3.33333px 1.66667px rgba(137, 83, 227, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        '.title-box': {
          padding: '0 36px',
          'h3.MuiTypography-root': {
            fontSize: '20px',
            marginBottom: '14px',
          },
          'p.MuiTypography-root': {
            fontSize: '14px',
          },
        },
        a: {
          color: (theme) => theme.palette.primary.main,
          fontWeight: 'bolder',
          fontSize: '14px',
          textAlign: 'center',
        },
        '.check-list': {
          padding: '36px',
          li: {
            display: 'flex',
            alignItems: 'center',
            padding: '6px 0px',
            svg: {
              color: (theme) => theme.palette.success.main,
            },
            '>*': {
              margin: '0 10px',
            },
          },
        },
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
