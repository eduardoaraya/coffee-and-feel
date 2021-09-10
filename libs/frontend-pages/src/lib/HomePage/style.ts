import { SxProps, Theme } from '@material-ui/system';

type HomePageStyle = {
  [key: string]: SxProps<Theme>;
};

export default {
  homePage: {
    overflow: 'hidden',
    top: '105px',
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f2e9',
    backgroundImage: `url(/imgs/bg_default.svg)`,
  },
  slideProductRepresentation: {
    padding: '35px 0px 105px 0px',
  },
} as HomePageStyle;
