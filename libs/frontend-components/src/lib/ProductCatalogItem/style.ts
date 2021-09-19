import { SxProps, Theme } from '@material-ui/system';

export default {
  root: {
    background: '#FFF',
    boxSizing: 'border-box',
    boxShadow: 1,
    marginBottom: '75px',
    padding: '25px',
    display: 'flex',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    borderRadius: '17px',
    '.product-image': {
      width: {
        md: '320px',
        xs: '100%',
      },
    },
    '.product-info': {
      paddingLeft: '55px',
    },
  },
} as {
  root: SxProps<Theme>;
};
