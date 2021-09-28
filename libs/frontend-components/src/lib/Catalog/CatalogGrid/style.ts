import { SxProps, Theme } from '@material-ui/system';
export default {
  root: {
    padding: {
      md: '25px',
      xs: '45px 20px',
    },
    '.representation-catalog-actions': {
      display: {
        md: 'flex',
        xs: 'none',
      },
      margin: '25px 0 45px 0',
      '.tab-group': {
        justifyContent: 'flex-end',
      },
    },
    '.representation-catalog-grid': {
      display: 'flex',
      flexWrap: 'wrap',
      '&.representation-catalog-grid-mode-list': {
        flexDirection: {
          md: 'column',
          xs: 'row',
        },
        '.product-catalog-item-mobile': {
          margin: {
            md: 0,
            xs: '35px',
          },
        },
        '.product-catalog-item': {
          maxWidth: {
            md: '100%',
            xs: '320px',
          },
          margin: {
            lg: '35px',
            md: '15px auto',
            xs: '5px auto',
          },
          '.product-info': {
            padding: 0,
          },
        },
      },
      '&.representation-catalog-grid-mode-grid': {
        flexDirection: 'row',
        '.product-catalog-item-mobile': {
          margin: {
            lg: '35px',
            md: '15px auto',
            xs: '5px auto',
          },
        },
        '.product-catalog-item': {
          maxWidth: '320px',
        },
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
