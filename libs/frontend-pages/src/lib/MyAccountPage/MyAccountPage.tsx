import {
  SidebarMyAccount,
  SubscriptionsMyAccount,
} from '@atlascode/coffee-front-components';
import { Box, Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import getDefaultStyle from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountPageProps {}

export const MyAccountPage: React.FC<MyAccountPageProps> = ({
  children,
}): JSX.Element => {
  const router = useRouter();

  return (
    <Box sx={getDefaultStyle()} className="page page-myaccount">
      <Container>
        <Box className="page-myaccount-grid">
          <SidebarMyAccount
            activeItem={router.pathname}
            name={'Alexandre Fristsch'}
          />
          <Box className="myaccount-content">{children}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyAccountPage;
