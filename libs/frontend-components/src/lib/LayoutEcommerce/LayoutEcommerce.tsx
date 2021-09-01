import Box from '@material-ui/core/Box';
import { Header } from '@atlascode/coffee-front-components';

/* eslint-disable-next-line */
export interface LayoutStoreProps {}

export const LayoutEcommerce: React.FC = ({ children }): JSX.Element => {
  return (
    <Box
      sx={{
        height: '200vh',
        paddingTop: '112px',
        main: {
          height: '100%',
        },
      }}
    >
      <Header />
      <main>{children}</main>
      <footer></footer>
    </Box>
  );
};

export default LayoutEcommerce;
