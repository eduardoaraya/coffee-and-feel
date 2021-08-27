import { SxProps } from '@material-ui/system';
import { Theme } from '@material-ui/core';

export default {
  header: {
    h: '77px',
    background: '#FFF',
    color: (theme) => theme.palette.primary.main,
  },
} as SxProps<Theme>;
