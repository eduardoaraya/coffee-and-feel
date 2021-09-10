import { Box, Button, Container, Typography } from '@material-ui/core';
import style from './style';
import Image from 'next/image';

export const KnowMoreSection: React.FC = (): JSX.Element => {
  return (
    <Box component="section" sx={style.root}>
      <figure className="plant left">
        <Image src="/imgs/plant0.svg" layout="fill" alt="Coffe Plant" />
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
        <Image src="/imgs/circlecoffee.png" layout="fill" alt="Cicle coffe" />
      </figure>
    </Box>
  );
};

export default KnowMoreSection;
