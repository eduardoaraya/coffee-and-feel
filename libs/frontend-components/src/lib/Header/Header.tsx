import {
  Box,
  Container,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Link from 'next/link';
import style from './style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {}

type MenuItemType = {
  name: string;
  path: string;
};

const menuItems: MenuItemType[] = [
  {
    name: 'Sobre nós',
    path: '/about-us',
  },
  {
    name: 'Clube de assinatura',
    path: '/plans',
  },
  {
    name: 'Produtos',
    path: '/catalog',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];

export const Header: React.FC = (props: HeaderProps): JSX.Element => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalTarget = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Box component="header" sx={style.header}>
      <Box component="div" className="header-banner-top">
        <span>Frete grátis acima de R$ 200,00</span>
      </Box>
      <Container>
        <Box component="div" sx={style.headerNavigator}>
          <div className="logo">
            <Link href="/">
              <a>
                <img src="./logo.svg" alt="logo" />
              </a>
            </Link>
          </div>
          <Box
            component="nav"
            className="navigator-links"
            sx={style.navigatorLinks}
          >
            <ul>
              {menuItems.map((item: MenuItemType, i: number) => (
                <li key={i}>
                  <Link href={item.path}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box
            component="nav"
            className="navigator-customer"
            sx={style.navigatorCustomer}
          >
            <ul>
              <li className="points">0</li>
              <li className="bag">
                <Badge badgeContent={4} color="primary">
                  <img src="./icons/bag.svg" alt="bag" />
                </Badge>
              </li>
              <li className="myaccount">
                <AccountCircleIcon />
              </li>
              <li className="menu-mobile" onClick={handleModalTarget}>
                <img src="./icons/menu.svg" alt="bag" />
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
      <Drawer
        variant="temporary"
        open={modalOpen}
        onClose={handleModalTarget}
        sx={style.drawer}
      >
        <List>
          {menuItems.map((item: MenuItemType, i: number) => (
            <ListItem key={i}>
              <Link href={item.path}>
                <ListItemText>
                  <a>{item.name}</a>
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
