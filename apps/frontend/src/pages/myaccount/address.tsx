import React, { ReactElement } from 'react';
import type { Page } from '../../../types';
import { Header, WrapperLayout } from '@atlascode/coffee-front-components';
import { AddressMyAccount, MyAccountPage } from '@atlascode/coffee-front-pages';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountAddressProps {}

export const Address: Page<MyAccountAddressProps> = (props) => {
  return (
    <MyAccountPage>
      <AddressMyAccount />
    </MyAccountPage>
  );
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
