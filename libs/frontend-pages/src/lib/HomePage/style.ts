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
    backgroundColor: '#ffffff',
    backgroundImage: `radial-gradient(#b6c5cc 0.9500000000000001px, #ffffff 0.9500000000000001px)`,
    backgroundSize: '19px 19px',
  },
  slideProductRepresentation: {
    padding: '35px 0px 105px 0px',
  },
} as HomePageStyle;
