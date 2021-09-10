import { Container, Typography, Box } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import Link from 'next/link';
import style from './style';
import Image from 'next/image';

export interface SubscriptionClubDetailsSection {
  plans?: {
    id: number;
    title: string;
    content: string[];
    subtitle: string;
  }[];
}

const defaultPlans = [
  {
    id: 1,
    title: 'Assinatura Standard',
    subtitle: 'Receba todos os meses',
    content: [
      'Café Blend Suave',
      'Café Blend Intenso',
      'Café Conillon',
      'Desconto de 10% em toda loja',
      'Acumule o dobro de Feel Points',
    ],
  },
  {
    id: 2,
    title: 'Assinatura Premium',
    subtitle: 'Receba todos os meses',
    content: [
      'Café Blend Suave',
      'Café Blend Intenso',
      'Café Conillon',
      'Café Orgânico Biodinâmico',
      'Desconto de 20% em toda loja',
      'Frete 50% OFF em toda loja',
      'Acumule o triplo de Feel Points',
    ],
  },
] as SubscriptionClubDetailsSection['plans'];

export const SubscriptionClubDetailsSection: React.FC<SubscriptionClubDetailsSection> =
  ({ plans = defaultPlans }): JSX.Element => {
    return (
      <Box component="section" sx={style.root}>
        <figure className="coffees left">
          <Image src="/imgs/coffees.png" layout="fill" alt="Beans" />
        </figure>
        <Container>
          <Typography className="title-section" variant="h1">
            Compare os benefícios do nosso Clube de Assinatura
          </Typography>
          <Box className="subscription-details-wrapper">
            {defaultPlans?.map((plan) => (
              <div className="subscription-box-detail" key={plan.id}>
                <div className="title-box">
                  <Typography variant="h3">{plan.title}</Typography>
                  <Typography>{plan.subtitle}</Typography>
                </div>
                <ul className="check-list">
                  {plan.content.map((item, key) => (
                    <li key={key}>
                      <Check />
                      <Typography>{item}</Typography>
                    </li>
                  ))}
                </ul>
                <Link href="/#">
                  <a className="default-link">Saiba mais</a>
                </Link>
              </div>
            ))}
          </Box>
        </Container>
        <figure className="coffees right">
          <Image src="/imgs/coffees.png" layout="fill" alt="Beans" />
        </figure>
      </Box>
    );
  };

export default SubscriptionClubDetailsSection;
