import { Container, Typography } from '@material-ui/core';
import Box from '@material-ui/system/Box';
import style from '../style';

export default function SubscriptionClubAboutSection(): JSX.Element {
  return (
    <Box component="section" sx={style.subscriptionSection}>
      <figure className="plant left">
        <img src="/imgs/plant0.svg" alt="" />
      </figure>
      <Container>
        <Box className="wrapper">
          <Typography className="section-title" variant="h1">
            Como funciona o nosso <br /> Clube de Assinatura?
          </Typography>
          <div className="section-info">
            <div className="card">
              <figure className="card-icon">
                <img src="/icons/rafiki1.svg" alt="Select the best Plan" />
              </figure>
              <div className="card-description">
                <Typography variant="body1">
                  Escolha o plano que mais <br /> combina com você
                </Typography>
              </div>
            </div>
            <div className="card">
              <figure className="card-icon">
                <img
                  src="/icons/rafiki0.svg"
                  alt="Exclusive Products and Discounts"
                />
              </figure>
              <div className="card-description">
                <Typography variant="body1">
                  Receba todo mês cafés <br /> especiais e diversos descontos
                </Typography>
              </div>
            </div>
            <div className="card">
              <figure className="card-icon">
                <img src="/icons/rafiki2.svg" alt="Earn Points" />
              </figure>
              <div className="card-description">
                <Typography variant="body1">
                  Acumule Feel points
                  <br />e troque por produtos
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
