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
