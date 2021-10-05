import { Container, Typography, Box, Button } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import Link from 'next/link';
import { PlanInterface } from './Contracts/SubscriptionClubDetailsInterface';
import style from './style';
import SubscriptionDetailList from './SubscriptionDetailList';

export interface SubscriptionClubDetailsSectionProps {
  plans: PlanInterface[];
}

export const SubscriptionClubDetailsSection: React.FC<SubscriptionClubDetailsSectionProps> =
  ({ plans }): JSX.Element => {
    return (
      <Box component="section" sx={style.root}>
        <figure className="coffees left">
          <img src="/imgs/coffees.png" alt="Coffee" />
        </figure>
        <Container>
          <Typography className="title-section" variant="h1">
            Conheça nosso Clube de Assinatura
          </Typography>
          <SubscriptionDetailList plans={plans} />
        </Container>
        <figure className="coffees right">
          <img src="/imgs/coffees.png" alt="Coffee" />
        </figure>
      </Box>
    );
  };

export default SubscriptionClubDetailsSection;
