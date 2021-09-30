/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { AccountCircle } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '@atlascode/coffee-frontend-utility';
import { useRouter } from 'next/router';
import { MobileMenu } from '../MobileMenu/MobileMenu';

/* eslint-disable-next-line */
export interface HeaderProps {}

export type MenuItemType = {
  name: string;
  path: string;
};

export const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [hideBanner, setHideBanner] = useState<boolean>(false);

  const router = useRouter();

  const debounceScroll = useDebounce(() => {
    const { pageYOffset } = window;
    if (pageYOffset > 70) {
      return setHideBanner(true);
    }
    setHideBanner(false);
  }, 500);

  useEffect(() => {
    const handleScroll = (_: Event) => {
      debounceScroll();
    };
    if (window !== undefined) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (window !== undefined) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalTarget = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Box
      component="header"
      className={hideBanner ? 'hide-banner-top' : ''}
      id="header-main"
      sx={style.header}
    >
      <Box component="div" className="header-banner-top">
        <span>Frete grátis acima de R$ 200,00</span>
      </Box>
      <Container>
        <Box component="div" sx={style.headerNavigator}>
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="logo" />
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
              <li className="points">332</li>
              <li className="myaccount">
                <AccountCircle />
              </li>
              <li className="bag">
                <Badge badgeContent={4} color="primary">
                  <img src="/icons/bag.svg" alt="bag" />
                </Badge>
              </li>
              <li className="menu-mobile" onClick={handleModalTarget}>
                <img src="/icons/menu.svg" alt="bag" />
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
      <MobileMenu
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpen={() => setModalOpen(true)}
        items={menuItems.map(({ name, path }, index) => {
          return {
            action: () => {
              router.push(path);
            },
            label: name,
          };
        })}
      />
    </Box>
  );
};

export default Header;

export const menuItems: MenuItemType[] = [
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
