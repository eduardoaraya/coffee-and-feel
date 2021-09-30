import { ReactElement } from 'react';
import type { Page } from '../../../types';
import {
  Header,
  WrapperLayout,
  ProfileMyAccount,
} from '@atlascode/coffee-front-components';
import { MyAccountPage } from '@atlascode/coffee-front-pages';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountProps {}

export const Index: Page<MyAccountProps> = (props) => {
  return (
    <MyAccountPage>
      <ProfileMyAccount />
    </MyAccountPage>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <WrapperLayout>
      <Header />
      {page}
    </WrapperLayout>
  );
};
