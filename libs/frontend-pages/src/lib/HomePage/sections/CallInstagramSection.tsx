import { Box, Container, Typography } from '@material-ui/core';
import style from '../style';
import Image from 'next/image';

export default function CallInstagramSection() {
  return (
    <Box component="section" sx={style.callInstagramSection}>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box className="section-description">
            <Typography variant="h1" className="section-title">
              Faça parte da nossa
              <br />
              Comunidade no Instagram
            </Typography>
            <Typography>
              Siga o{' '}
              <Typography variant="body1" component="span" color="primary">
                @coffeeandfeel
              </Typography>{' '}
              e fique por <br /> dentro das novidades, promoções <br /> e dicas
              sobre o mundo do café.
            </Typography>
          </Box>
        </Container>
        <figure className="insta-photo photo-one">
          <Image
            src="/imgs/insta0.png"
            layout="fill"
            alt="Instagram photo one"
          />
        </figure>
        <figure className="insta-photo photo-two">
          <Image
            src="/imgs/insta1.png"
            layout="fill"
            alt="Instagram photo two"
          />
        </figure>
        <figure className="insta-photo photo-three">
          <Image
            src="/imgs/insta2.png"
            layout="fill"
            alt="Instagram photo three"
          />
        </figure>
      </Container>
    </Box>
  );
}
