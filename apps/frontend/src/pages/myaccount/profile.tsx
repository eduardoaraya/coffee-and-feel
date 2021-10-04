import { ReactElement } from 'react';
import type { Page } from '../../../types';
import { Header, WrapperLayout } from '@atlascode/coffee-front-components';
import { MyAccountPage, ProfileMyAccount } from '@atlascode/coffee-front-pages';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountProfileProps {}

export const Profile: Page<MyAccountProfileProps> = (props) => {
  return (
    <MyAccountPage>
      <ProfileMyAccount />
    </MyAccountPage>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <WrapperLayout>
      <Header />
      {page}
    </WrapperLayout>
  );
};
