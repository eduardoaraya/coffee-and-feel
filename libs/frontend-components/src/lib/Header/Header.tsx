import { Box } from '@material-ui/core';
import style from './style';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC = (props: HeaderProps): JSX.Element => (
  <Box component="header" sx={style.header}>
    <Box component="div" className="header-banner-top">
      <span>Frete grátis a cima de R$ 200,00</span>
    </Box>
    <Box component="div" className="header-content">
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <nav className="navigator-links">
        <ul>
          <li>
            <a href="#sobrenos">Sobre nós</a>
          </li>
          <li>
            <a href="#assinatura">Clube de assinatura</a>
          </li>
          <li>
            <a href="#assinatura">Produtos</a>
          </li>
          <li>
            <a href="#assinatura">Blog</a>
          </li>
        </ul>
      </nav>
      <nav className="navigator-customer">
        <ul>
          <li>0</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </nav>
    </Box>
  </Box>
);

export default Header;
