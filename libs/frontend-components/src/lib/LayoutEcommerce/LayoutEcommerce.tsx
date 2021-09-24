import { Box, Theme } from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

/* eslint-disable-next-line */
export interface LayoutStoreProps {}

const style: SxProps<Theme> = {
  layout: {
    main: {
      position: 'relative',
      height: '100%',
      minHeight: '100vh',
    },
    '.page': {
      position: 'relative',
      overflow: 'hidden',
      marginTop: '105px',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      backgroundImage: `radial-gradient(#b6c5cc 0.9500000000000001px, #f6f6f6 0.9500000000000001px)`,
      backgroundSize: '19px 19px',
    },
  },
};

export const LayoutEcommerce: React.FC = ({ children }): JSX.Element => {
  return (
    <Box sx={style.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default LayoutEcommerce;
