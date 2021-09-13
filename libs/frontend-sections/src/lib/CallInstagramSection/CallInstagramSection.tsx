import { Box, Container, Typography } from '@material-ui/core';
import Image from 'next/image';
import style from './style';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import { ScrollTarget } from '@atlascode/coffee-frontend-utility';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CallInstagramSectionProps {}

export const CallInstagramSection: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollTarget
      className="insta-section"
      handleOut={() => {
        setIsVisible(false);
      }}
      handleIn={() => {
        setIsVisible(true);
      }}
      handleOver={() => console.log('aq')}
    >
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
                e fique por <br /> dentro das novidades, promoções <br /> e
                dicas sobre o mundo do café.
              </Typography>
            </Box>
          </Container>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 1.5 }}
                className="insta-photo photo-one"
              >
                <figure className="insta-photo photo-one">
                  <Image
                    src="/imgs/insta0.png"
                    layout="fill"
                    alt="Instagram photo one"
                  />
                </figure>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 1.5 }}
                className="insta-photo photo-two"
              >
                <figure>
                  <Image
                    src="/imgs/insta1.png"
                    layout="fill"
                    alt="Instagram photo two"
                  />
                </figure>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 1.5 }}
                className="insta-photo photo-three"
              >
                <figure>
                  <Image
                    src="/imgs/insta2.png"
                    layout="fill"
                    alt="Instagram photo three"
                  />
                </figure>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </ScrollTarget>
  );
};

export default CallInstagramSection;
