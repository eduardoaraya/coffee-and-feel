import { Box, Button, Container, Typography } from '@material-ui/core';
import style from '../style';
import Image from 'next/image';

export default function KnowMoreSection() {
  return (
    <Box component="h1" sx={style.knowMoreSection}>
      <figure className="circlecoffee right">
        <Image src="/imgs/circlecoffee.png" layout="fill" alt="Cicle coffe" />
      </figure>
      <Container>
        <div className="section-content">
          <Typography variant="h1">
            Queremos ressignificar a prática <br />
            diária e monótona de beber café.
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
      <figure className="plant right">
        <Image src="/imgs/plant1.svg" layout="fill" alt="Plant one" />
      </figure>
    </Box>
  );
}
