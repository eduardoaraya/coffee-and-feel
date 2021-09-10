import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    padding: {
      md: '105px 0px',
      xs: '45px 0px',
    },

    '.section-wrapper': {
      display: 'flex',
      flexDirection: {
        md: 'row',
        xs: 'column',
      },
      '.section-cat': {
        width: {
          md: '50%',
          xs: '100%',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '.section-cat-content': {
          minWidth: '200px',
          maxWidth: {
            md: '350px',
            xs: '100%',
          },
          padding: {
            md: '0',
            xs: '45px',
          },
          h1: {
            lineHeight: '45px',
            marginBottom: '45px',
            textAlign: {
              md: 'left',
              xs: 'center',
            },
          },
        },
      },

      '.post-list': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: {
          md: '45px',
          xs: '0',
        },
        '.post-item': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            md: 'row',
            sm: 'row',
            xs: 'column',
          },
          '.post-image': {
            position: 'relative',
            width: '304.59px',
            height: '206.02px',
            borderRadius: '8px',
            boxShadow: `0px 3.72152px 3.72152px rgba(0, 0, 0, 0.25), inset 0px 3.72152px 3.72152px rgba(0, 0, 0, 0.25)`,
            background: (theme) => theme.palette.secondary.main,
          },
          '.post-info': {
            maxWidth: {
              md: '400px',
              xs: '300px',
            },
            padding: {
              md: '39px',
              xs: '15px 10px',
            },
            marginBottom: {
              md: '0',
              xs: '25px',
            },

            '.post-info-time': {
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              svg: {
                marginRight: '5px',
              },
            },
            '.post-info-title': {
              fontSize: '20px',
              marginBottom: '20px',
            },
            '.post-info-tag': {
              maxWidth: '85px',
              padding: '5px 15px',
              fontSize: '12px',
              borderRadius: '50px',
              background: (theme) => theme.palette.primary.main,
              textAlign: 'center',
              color: '#FFF',
            },
          },
        },
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
