import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    positon: 'relative',
    zIndex: 2,
    width: '100%',
    minHeight: '900px',
    position: 'relative',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      lg: '0 100px',
      md: '0px 100px',
      xs: '0px 180px',
    },
    backgroundSize: {
      xl: '630px',
      md: '35%',
      sm: '35%',
      xs: '273px',
    },
    padding: {
      md: '103px 0px',
      xs: '25px 0px',
    },

    '.avatar': {
      position: 'absolute',
      zIndex: -1,
      margin: 0,
      width: '300px',
      height: '300px',
    },

    '.wrapper': {
      padding: {
        md: '105px 0',
        xs: '15px 0px',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    '.section-info': {
      position: 'relative',
      '.section-title': {
        maxWidth: '420px',
        lineHeight: {
          md: '46px',
          xs: '30px',
        },
        display: 'flex',
        justifyContent: {
          md: 'flex-start',
          xs: 'center',
        },
        margin: {
          md: '0',
          xs: '0 auto',
        },
        color: '#323232',
        textAlign: {
          md: 'left',
          xs: 'center',
        },
        padding: {
          md: '10px 0px',
          xs: '0px 0px 289.07px 0px',
        },
      },
      width: {
        md: '65%',
        xs: '100%',
      },
      padding: {
        md: '45px 0',
        xs: '45px 20px',
      },
      '.MuiButton-root': {
        display: 'block',
        margin: {
          md: '77px 0 0 0',
          xs: '0 auto',
        },
        alignSelf: 'center',
      },
      '.section-cards': {
        display: 'flex',
        justifyContent: 'center',
        margin: '75px 0px',
        zIndex: 2,
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
        '.card': {
          minWidth: '200px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          margin: {
            md: '0px 30px 0 0',
            xs: '20px 0px',
          },
          '.MuiTypography-root': {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: {
              md: 'left',
              xs: 'center',
            },
          },
          '.card-description': {
            flex: 1,
            marginTop: '17.5px',
            textAlign: {
              md: 'left',
              xs: 'center',
            },
            'p.MuiTypography-root': {
              color: '#737373',
              fontSize: {
                md: '20px',
                xs: '16px',
              },
              fontWeight: 'normal',
              textTransform: 'initial',
            },
          },
        },
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
