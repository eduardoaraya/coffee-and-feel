import { MenuItemType } from '@atlascode/coffee-front-components';
import { Box, Container, Typography } from '@material-ui/core';
import getDefaultStyle from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyAccountPageProps {}

const myAccountItems: MenuItemType[] = [
  {
    path: '/myaccount/subscriptions',
    name: 'Minha Assinatura',
  },
  {
    path: '/myaccount/profile',
    name: 'Dados Pessoais',
  },
  {
    path: '/myaccount/orders',
    name: 'Pedidos',
  },
  {
    path: '/myaccount/cards',
    name: 'Cartões',
  },
  {
    path: '/myaccount/address',
    name: 'Endereço',
  },
];

export const MyAccountPage = (props: MyAccountPageProps) => {
  return (
    <Box sx={getDefaultStyle()} className="page page-myaccount">
      <Container>
        <Box className="page-myaccount-grid">
          <Box className="myaccount-sidebar">
            <Box className="customer-profile">
              <Box className="customer-avatar">A</Box>
              <Typography>Alexandre Fritsch</Typography>
            </Box>
            <Box className="myaccount-navigator" component="nav">
              <Box component="ul">
                {myAccountItems.map((item, key) => (
                  <Box key={key}>{item.name}</Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="myaccount-content"></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyAccountPage;
