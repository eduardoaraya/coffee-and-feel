import { Box, Container, Typography } from '@material-ui/core';
import Image from 'next/image';
import style from './style';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollTarget } from '@atlascode/coffee-frontend-utility';
import { useState } from 'react';

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

        <figure className="insta-photo mobile-photo top">
          <img src="/imgs/insta0.png" alt="Instagram one" />
        </figure>
        <figure className="insta-photo mobile-photo bottom">
          <img src="/imgs/insta1.png" alt="Instagram two" />
        </figure>

        <figure className="insta-photo photo-one">
          <img src="/imgs/coffee-insta.png" alt="Instagram one" />
        </figure>
        <figure className="insta-photo photo-mock top">
          <img src="/imgs/insta-mock.png" alt="Instagram two" />
        </figure>
        <figure className="insta-photo photo-mock bottom">
          <img src="/imgs/insta-mock.png" alt="Instagram two" />
        </figure>
        <figure className="insta-photo photo-two">
          <img src="/imgs/insta2.png" alt="Instagram three" />
        </figure>
      </Container>
    </Box>
  );
};

export default CallInstagramSection;
