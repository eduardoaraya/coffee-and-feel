import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import WrapperLayout from './WrapperLayout';

/* eslint-disable-next-line */
export interface LayoutEcommerceProps {}

export const LayoutEcommerce: React.FC<LayoutEcommerceProps> = ({
  children,
}): JSX.Element => {
  return (
    <WrapperLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </WrapperLayout>
  );
};

export default LayoutEcommerce;
