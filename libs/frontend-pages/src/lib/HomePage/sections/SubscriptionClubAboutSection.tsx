import { Container, Typography } from '@material-ui/core';
import Box from '@material-ui/system/Box';
import style from '../style';

export default function SubscriptionClubAboutSection(): JSX.Element {
  return (
    <Box component="section" sx={style.subscriptionBox}>
      <figure className="plant left">
        <img src="/imgs/plant0.svg" alt="" />
      </figure>
      <Container>
        <Box className="wrapper">
          <Typography className="section-title" variant="h1">
            Como funciona o nosso Clube de Assinatura?
          </Typography>
          <div className="section-info">
            <div className="card">
              <figure className="card-icon">
                <img src="/icons/rafiki1.svg" alt="Select the best Plan" />
              </figure>
              <div className="card-description">
                <Typography>
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
                <Typography>
                  Receba todo mês cafés <br /> especiais e diversos descontos
                </Typography>
              </div>
            </div>
            <div className="card">
              <figure className="card-icon">
                <img src="/icons/rafiki2.svg" alt="Earn Points" />
              </figure>
              <div className="card-description">
                <Typography>
                  Acumule pontos e troque <br /> por produtos exclusivos
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Container>
      <figure className="plant right">
        <img src="/imgs/plant1.svg" alt="" />
      </figure>
    </Box>
  );
}
