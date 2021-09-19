import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    '.page-catalog-grid': {
      display: 'grid',
      gridTemplateColumns: 'minmax(250px, 300px) 1fr',
      gridAutoRows: 'auto',
      '.catalog-filter': {
        marginTop: '50px',
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
