import { SxProps, Theme } from '@material-ui/system';

type HomePageStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  slideProductRepresentation: {
    padding: '35px 0px 105px 0px',
    '.title-slide-product': {
      textAlign: 'center',
      marginBottom: '55px',
    },
  },
} as HomePageStyle;
