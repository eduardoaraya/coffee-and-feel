import React, { ReactElement } from 'react';
import type { Page } from '../../../types';
import { Header, WrapperLayout } from '@atlascode/coffee-front-components';
import {
  CreditCardMyAccount,
  MyAccountPage,
} from '@atlascode/coffee-front-pages';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountCardsProps {}

export const Cards: Page<MyAccountCardsProps> = (props) => {
  return (
    <MyAccountPage>
      <CreditCardMyAccount />
    </MyAccountPage>
  );
};

export default Cards;

Cards.getLayout = function getLayout(page: ReactElement) {
  return (
    <WrapperLayout>
      <Header />
      {page}
    </WrapperLayout>
  );
};
