import { ReactElement } from 'react';
import type { Page } from '../../../types';
import { Header, WrapperLayout } from '@atlascode/coffee-front-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountProps {}

export const Address: Page<MyAccountProps> = (props) => {
  return <div>Address</div>;
};

export default Address;

Address.getLayout = function getLayout(page: ReactElement) {
  return (
    <WrapperLayout>
      <Header />
      {page}
    </WrapperLayout>
  );
};
