import { Theme } from '@material-ui/core';
import { SxProps } from '@material-ui/system';

export const style = {
  root: {
    '.page-catalog-grid': {
      display: 'grid',
      gridTemplateColumns: {
        md: 'minmax(250px, 300px) 1fr',
        xs: '1fr',
      },
      gridAutoRows: 'auto',
      '.catalog-filter': {
        marginTop: '50px',
      },
    },
  },
} as {
  root: SxProps<Theme>;
};
