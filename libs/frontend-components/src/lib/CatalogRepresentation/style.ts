import { SxProps, Theme } from '@material-ui/system';
export default {
  root: {
    padding: {
      md: '25px',
      xs: '45px 20px',
    },
    '.representation-catalog-actions': {
      margin: '25px 0 45px 0',
      '.tab-group': {
        justifyContent: 'flex-end',
      },
    },
    '.representation-catalog-grid': {
      display: 'flex',
      flexWrap: 'wrap',
      '&.representation-catalog-grid-mode-list': {
        flexDirection: 'column',
      },
      '&.representation-catalog-grid-mode-grid': {
        flexDirection: 'row',
        '.product-catalog-item-mobile': {
          margin: '35px',
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
