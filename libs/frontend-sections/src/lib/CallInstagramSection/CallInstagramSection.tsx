import { Box, Container, Typography } from '@material-ui/core';
import Image from 'next/image';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CallInstagramSectionProps {}

export const CallInstagramSection: React.FC = (): JSX.Element => {
  return (
    <Box component="section" sx={style.root}>
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
};

export default CallInstagramSection;
