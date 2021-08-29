import { Box, Container } from '@material-ui/core';
import Link from 'next/link';
import style from './style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC = (props: HeaderProps): JSX.Element => (
  <Box component="header" sx={style.header}>
    <Box component="div" className="header-banner-top">
      <span>Frete grátis a cima de R$ 200,00</span>
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
            <li>
              <Link href="/about-us">
                <a>Sobre nós</a>
              </Link>
            </li>
            <li>
              <Link href="/plans">
                <a>Clube de assinatura</a>
              </Link>
            </li>
            <li>
              <Link href="/catalog">
                <a>Produtos</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
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
              <img src="./icons/bag.svg" alt="bag" />
            </li>
            <li className="myaccount">
              <AccountCircleIcon />
            </li>
          </ul>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Header;
