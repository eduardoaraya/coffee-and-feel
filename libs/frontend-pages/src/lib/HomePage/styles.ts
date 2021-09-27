import { Theme } from '@material-ui/core';
import { SxProps } from '@material-ui/system';

type HomePageStyle = {
  [key: string]: SxProps<Theme>;
};

export const style = {
  slideProductRepresentation: {
    padding: '35px 0px 105px 0px',
    '.title-slide-product': {
      textAlign: 'center',
      marginBottom: '55px',
    },
  },
} as HomePageStyle;
