import { Box, Theme } from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import { Header } from '../Header/Header';

/* eslint-disable-next-line */
export interface LayoutStoreProps {}

const style: SxProps<Theme> = {
  layout: {
    main: {
      height: '100%',
    },
    '.page': {
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
  },
};

export const LayoutEcommerce: React.FC = ({ children }): JSX.Element => {
  return (
    <Box sx={style.layout}>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </Box>
  );
};

export default LayoutEcommerce;
