import Box from '@material-ui/core/Box';
import { SxProps } from '@material-ui/system';
import { Header } from '@atlascode/coffee-front-components';

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
