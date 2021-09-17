import { Button, Container, Typography } from '@material-ui/core';
import Box from '@material-ui/system/Box';
import style from './style';

export const SubscriptionClubAboutSection: React.FC = (): JSX.Element => {
  return (
    <Box component="section" sx={style.root}>
      <Container>
        <Box className="wrapper">
          <div className="section-info">
            <Typography className="section-title" variant="h1">
              Como funciona o nosso <br /> Clube de Assinatura?
            </Typography>
            <div className="section-cards">
              <div className="card">
                <Typography variant="body1" color="primary">
                  Assinatura
                </Typography>
                <div className="card-description">
                  <Typography variant="body1">
                    Escolha o plano <br />
                    que mais <br /> combina com você
                  </Typography>
                </div>
              </div>
              <div className="card">
                <Typography variant="body1" color="primary">
                  Benefícios
                </Typography>
                <div className="card-description">
                  <Typography variant="body1">
                    Todos mês, receba
                    <br /> em casa cafés <br />
                    selecionados
                  </Typography>
                </div>
              </div>
              <div className="card">
                <Typography variant="body1" color="primary">
                  Vantagens
                </Typography>
                <div className="card-description">
                  <Typography variant="body1">
                    Ganhe descontos
                    <br /> exclusivos para
                    <br /> comprar na loja
                  </Typography>
                </div>
              </div>
            </div>
            <Button size="large" variant="contained" color="primary">
              Conheça o clube
            </Button>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscriptionClubAboutSection;
