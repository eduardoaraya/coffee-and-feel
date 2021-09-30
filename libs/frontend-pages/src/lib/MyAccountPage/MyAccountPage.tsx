import {
  MenuItemType,
  SidebarMyAccount,
} from '@atlascode/coffee-front-components';
import { Box, Container, Typography } from '@material-ui/core';
import getDefaultStyle from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountPageProps {}

export const MyAccountPage = (props: MyAccountPageProps) => {
  return (
    <Box sx={getDefaultStyle()} className="page page-myaccount">
      <Container>
        <Box className="page-myaccount-grid">
          <SidebarMyAccount
            activeItem="/myaccount/subscriptions"
            name={'Alexandre Fristsch'}
          />
          <Box className="myaccount-content"></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyAccountPage;
