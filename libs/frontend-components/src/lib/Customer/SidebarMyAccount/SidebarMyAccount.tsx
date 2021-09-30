import { MenuItemType } from '@atlascode/coffee-front-components';
import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import getDefaultStyle from './style';

export interface SidebarMyAccountProps {
  activeItem: string;
  name: string;
}

export const SidebarMyAccount: React.FC<SidebarMyAccountProps> = ({
  activeItem,
  name,
}): JSX.Element => (
  <Box className="sidebar" sx={getDefaultStyle()}>
    <Box className="sidebar-header">
      <Box className="customer-avatar">
        <Typography color="white">{name[0]}</Typography>
      </Box>
      <Typography className="customer-name">{name}</Typography>
    </Box>
    <Box className="sidebar-navigator" component="nav">
      <Box component="ul">
        {myAccountItems.map((item, key) => (
          <Box
            component="li"
            key={key}
            className={activeItem === item.path ? 'active' : ''}
          >
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
    <Box className="sidebar-footer">
      <Box>
        <Typography>Encerrar sessão</Typography>
      </Box>
    </Box>
  </Box>
);

export default SidebarMyAccount;

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
