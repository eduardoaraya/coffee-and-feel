import { SxProps, Theme } from '@material-ui/system';

export default () =>
  ({
    '.page-myaccount-grid': {
      marginTop: '45px',
      display: 'grid',
      gridTemplateColumns: {
        md: 'minmax(250px, 300px) 1fr',
        xs: '1fr',
      },
      gap: '40px',
      gridAutoRows: 'auto',
      '.sidebar, .myaccount-content': {
        width: '100%',
        marginTop: '50px',
        background: '#FFF',
        boxShadow: '2px 2px 5px -1px rgba(52, 52, 52, 0.12)',
        borderRadius: '6px',
      },

      '.myaccount-content': {},
    },
  } as SxProps<Theme>);
