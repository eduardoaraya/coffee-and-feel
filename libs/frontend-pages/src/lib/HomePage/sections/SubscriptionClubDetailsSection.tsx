import { Container, Typography, Box } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import Link from 'next/link';
import style from '../style';
import Image from 'next/image';

export default function SubscriptionClubDetailsSection(): JSX.Element {
  return (
    <Box component="section" sx={style.subscriptionClubDetailsSection}>
      <figure className="coffees left">
        <Image src="/imgs/coffees.png" layout="fill" alt="Beans" />
      </figure>
      <Container>
        <Typography className="title-section" variant="h1">
          Compare os benefícios do nosso Clube de Assinatura
        </Typography>
        <Box className="subscription-details-wrapper">
          <div className="subscription-box-detail">
            <div className="title-box">
              <Typography variant="h3">Assinatura Standard</Typography>
              <Typography>Receba todos os meses</Typography>
            </div>
            <ul className="check-list">
              <li>
                <Check />
                <Typography>Café Blend Suave </Typography>
              </li>
              <li>
                <Check />
                <Typography>Café Blend Intenso</Typography>
              </li>
              <li>
                <Check />
                <Typography>Café Conillon</Typography>
              </li>
              <li>
                <Check />
                <Typography>Desconto de 10% em toda loja</Typography>
              </li>
              <li>
                <Check />
                <Typography>Acumule o dobro de Feel Points</Typography>
              </li>
            </ul>
            <Link href="/#" className="default-link">
              <a>Saiba mais</a>
            </Link>
          </div>
          <div className="subscription-box-detail">
            <div className="title-box">
              <Typography variant="h3">Assinatura Premium</Typography>
              <Typography>Receba todos os meses</Typography>
            </div>
            <ul className="check-list">
              <li>
                <Check />
                <Typography>Café Blend Suave</Typography>
              </li>
              <li>
                <Check />
                <Typography>Café Blend Intenso</Typography>
              </li>
              <li>
                <Check />
                <Typography>Café Conillon</Typography>
              </li>
              <li>
                <Check />
                <Typography>Café Orgânico Biodinâmico</Typography>
              </li>
              <li>
                <Check />
                <Typography>Desconto de 20% em toda loja</Typography>
              </li>
              <li>
                <Check />
                <Typography>Frete 50% OFF em toda loja</Typography>
              </li>
              <li>
                <Check />
                <Typography>Acumule o triplo de Feel Points</Typography>
              </li>
            </ul>
            <Link href="/#" className="default-link">
              <a>Saiba mais</a>
            </Link>
          </div>
        </Box>
      </Container>
      <figure className="coffees right">
        <Image src="/imgs/coffees.png" layout="fill" alt="Beans" />
      </figure>
    </Box>
  );
}
