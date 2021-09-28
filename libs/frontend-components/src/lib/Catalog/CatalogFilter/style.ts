import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    width: '100%',
    minHeight: {
      md: '300px',
      xs: '80px',
    },
    background: '#FFF',
    boxShadow: '2px 2px 5px -1px rgba(52, 52, 52, 0.12)',
    borderRadius: '6px',
  },
} as {
  root: SxProps<Theme>;
};
