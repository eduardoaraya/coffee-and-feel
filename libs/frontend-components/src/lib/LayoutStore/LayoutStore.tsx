import { Header } from '@atlascode/coffee-front-components';

/* eslint-disable-next-line */
export interface LayoutStoreProps {}

export const LayoutStore: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default LayoutStore;
