import { SxProps, Theme } from '@material-ui/system';

export default () =>
  ({
    background: (theme) => theme.palette.secondary.main,
    minHeight: '400px',
    '.footer-grid': {
      padding: '40px 0px',
      display: 'grid',
      gridTemplateColumns: {
        md: 'repeat(2, minmax(200px, 1fr)) 350px 180px',
        xs: 'repeat(1, minmax(300px, 1fr))',
      },
      gridAutoRows: 'auto',
      '.footer-grid-column': {
        width: '100%',
        padding: '30px 15px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
          md: 'flex-start',
          xs: 'center',
        },
        '.footer-grid-column-title': {
          textTransform: 'uppercase',
          marginBottom: '35px',
          fontWeight: '900',
        },
        '.item': {
          margin: '7.5px 0',
          a: {
            color: '#FFF',
          },
        },
        '.wrapper-items': {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          '.item': {
            margin: '4px 7px 0 0',
          },
        },
      },
    },
    '.atlascode-copyright': {
      padding: '17.5px 0px',
      borderTop: 'solid 1px #FFF',
      '.atlascode-copyright-content': {
        '.atlascode-copyright-content-text': {
          textAlign: 'center',
          fontSize: '.86em',
        },
      },
    },
  } as SxProps<Theme>);
