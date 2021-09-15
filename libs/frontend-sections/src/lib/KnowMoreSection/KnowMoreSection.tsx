import { Box, Button, Container, Typography } from '@material-ui/core';
import style from './style';

export const KnowMoreSection: React.FC = (): JSX.Element => {
  return (
    <Box component="section" sx={style.root}>
      <figure className="plant left">
        <img src="/imgs/plant0.svg" alt="Coffe Plant" />
      </figure>
      <Container>
        <div className="section-content">
          <Typography variant="h1">
            Queremos ressignificar a prática diária e monótona de beber café.
          </Typography>
          <Typography variant="body1">
            Conectamos o produtor ao consumidor final,
            <br /> unindo o tradicional e gourmet, criando <br />
            experiências únicas de consumo do café.
          </Typography>
          <Button size="large" variant="contained" color="primary">
            Saiba Mais
          </Button>
        </div>
      </Container>
      <figure className="circlecoffee right">
        <img src="/imgs/circlecoffee.png" alt="Cicle coffe" />
      </figure>
    </Box>
  );
};

export default KnowMoreSection;
