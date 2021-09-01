import { Container } from '@material-ui/core';
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
          <h1 className="section-title">
            Como funciona o nosso Clube de Assinatura?
          </h1>
          <div className="section-info">
            <div className="card">
              <figure className="card-icon">
                <img src="/icons/rafiki1.svg" alt="Select the best Plan" />
              </figure>
              <div className="card-description">
                <p>Escolha o plano que mais combina com você</p>
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
                <p>Receba todo mês cafés especiais e diversos descontos</p>
              </div>
            </div>
            <div className="card">
              <figure className="card-icon">
                <img src="/icons/rafiki2.svg" alt="Earn Points" />
              </figure>
              <div className="card-description">
                <p>Acumule pontos e troque por produtos exclusivos</p>
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
