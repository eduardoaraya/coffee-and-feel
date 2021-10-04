import React from 'react';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Container, Typography } from '@material-ui/core';
import { MotionBox, MotionBoxProps } from '@atlascode/coffee-frontend-utility';
import TestimonialPicture from './TestimonialPicture';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import _ from 'lodash';
import { AnimatePresence, Variants } from 'framer-motion';
import { useTestimonialSlider } from './useTestimonialSlider';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';

export type Testimonial = {
  attestantSocial?: string;
  testimonial?: string;
  attestantName?: string;
  attestantLocation?: string;
  src?: string;
  alt?: string;
};

/* eslint-disable-next-line */
export interface TestimonialSliderProps extends MotionBoxProps {
  title?: string;
  testimonials?: Testimonial[];
}

const transition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export function TestimonialSlider({
  sx,
  title = 'Placeholder title',
  testimonials = [],
  ...rest
}: TestimonialSliderProps) {
  const { activeIndex, activeTestimonial, backwards, forward } =
    useTestimonialSlider(testimonials);

  return (
    <MotionBox
      key={activeIndex}
      sx={{ ...(styles.root as any), ...(sx as any) }}
      {...rest}
    >
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.grid}>
          {activeTestimonial && (
            <TestimonialPicture
              key={activeIndex}
              src={activeTestimonial.src}
              alt={activeTestimonial.alt}
              variants={transition}
              initial="hidden"
              animate="visible"
            />
          )}

          <MotionBox
            variants={transition}
            initial="hidden"
            animate="visible"
            key={activeIndex}
          >
            {activeTestimonial && (
              <Box sx={styles.textContainer}>
                <Box>
                  <Typography variant="h2" sx={styles.title}>
                    {title}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="caption" sx={styles.attestantSocial}>
                    {activeTestimonial.attestantSocial}
                  </Typography>

                  <Box sx={styles.testimonial}>
                    {activeTestimonial.testimonial}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={styles.attestant}>
                    {activeTestimonial.attestantName}
                  </Typography>

                  <Typography variant="body1" sx={styles.attestantLocation}>
                    {activeTestimonial.attestantLocation}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box sx={styles.navigationButtonContainer}>
              <CircleIconButton onClick={backwards} icon={ArrowBack} />
              <CircleIconButton onClick={forward} icon={ArrowForward} />
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </MotionBox>
  );
}

export default TestimonialSlider;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {},
  grid: {
    display: 'flex',
    columnGap: { lg: '6em' },
    rowGap: { xs: '3em' },
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: { xs: 'center', lg: 'unset' },
    justifyContent: { lg: 'center' },
  },

  textContainer: {
    textAlign: { xs: 'center', lg: 'start' },
    gap: { xs: '1.5em', lg: '3em' },
    display: 'flex',
    flexDirection: 'column',
    flexBasis: { lg: '50%' },
  },
  title: {
    fontSize: { xs: '2em', lg: '3em' },
  },
  testimonial: {
    maxWidth: { xs: '36ch' },
    fontSize: { xs: '1.6em', lg: '2em' },
    color: '#333',
  },
  attestant: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
  },
  attestantSocial: {
    fontSize: { xs: '1.4em', lg: '1.6em' },
  },
  attestantLocation: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.grey[500],
  },

  navigationButtonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: { xs: 'center', lg: 'flex-start' },
    gap: { xs: '3em' },
    pt: { xs: '2em' },
  },
});
