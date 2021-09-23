import { menuItems } from '@atlascode/coffee-front-components';
import { Container, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import Link from 'next/link';
import getDefaultStyles from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props): JSX.Element => (
  <Box sx={getDefaultStyles()} component="footer">
    <Container>
      <Box className="footer-grid">
        <Box className="footer-grid-column">
          <Typography
            color="white"
            variant="body1"
            className="footer-grid-column-title"
          >
            Navegação
          </Typography>
          {menuItems.map((item) => (
            <Box className="item">
              <Link href={item.path}>
                <a>{item.name}</a>
              </Link>
            </Box>
          ))}
        </Box>
        <Box className="footer-grid-column">
          <Typography
            color="white"
            variant="body1"
            className="footer-grid-column-title"
          >
            Informações
          </Typography>
          {[
            {
              name: 'Políticas de Privacidade',
              path: '/',
            },
            {
              name: 'Termos de uso',
              path: '/',
            },
            {
              name: 'Contato',
              path: '/',
            },
          ].map((item, key) => (
            <Box className="item" key={key}>
              <Link href={item.path}>
                <a>{item.name}</a>
              </Link>
            </Box>
          ))}
        </Box>
        <Box className="footer-grid-column">
          <Typography
            color="white"
            variant="body1"
            className="footer-grid-column-title"
          >
            Formas de Pagamento
          </Typography>
          <Box className="wrapper-items">
            {['visa', 'mastercard', 'elo'].map((item) => (
              <Box className="item item-payment">
                <img
                  src={`/icons/${item}.svg`}
                  alt={`Payment method ${item}`}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="footer-grid-column">
          <Typography
            color="white"
            variant="body1"
            className="footer-grid-column-title"
          >
            Redes Sociais
          </Typography>
          <Box className="wrapper-items">
            {['instagram', 'facebook'].map((item) => (
              <Box className="item item-social">
                <img src={`/icons/${item}.svg`} alt={`Social ${item}`} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
    <Box className="atlascode-copyright">
      <Container className="atlascode-copyright-content">
        <Typography color="white" className="atlascode-copyright-content-text">
          {new Date().getFullYear()} Todos os direitos reservados - Atlas Code
          Dev - Desenvolvimento web & estratégia
        </Typography>
      </Container>
    </Box>
  </Box>
);

export default Footer;
